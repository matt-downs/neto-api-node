import { post, UriOptions, UrlOptions, CoreOptions } from "request";

export interface ExecOptions {
  debug?: boolean;
}

export interface InitOptions {
  url: string;
  key?: string;
  user?: string;
  oauth_clientId?: string;
  oauth_secret?: string;
}

let requestOptions: (UriOptions & CoreOptions) | (UrlOptions & CoreOptions);

export function init(config: InitOptions) {
  if (!config.url) {
    throw new Error("url must be specified");
  }
  if (!config.key && !(config.oauth_clientId && config.oauth_secret)) {
    throw new Error("key or oauth_clientId + oauth_secret must be specified");
  }

  requestOptions = {
    headers: {
      Accept: "application/json"
    },
    json: true,
    strictSSL: true,
    url: config.url + "/do/WS/NetoAPI"
  };

  if (config.key) {
    requestOptions.headers!.NETOAPI_KEY = config.key;
  }
  if (config.oauth_clientId) {
    requestOptions.headers!.X_ACCESS_KEY = config.oauth_clientId;
  }
  if (config.oauth_secret) {
    requestOptions.headers!.X_SECRET_KEY = config.oauth_clientId;
  }
  if (config.user) {
    requestOptions.headers!.NETOAPI_USERNAME = config.user;
  }
}

export function postApi({
  action,
  body
}: {
  action: string;
  body: any;
}): Promise<any> {
  let options = {
    ...requestOptions,
    headers: {
      ...requestOptions.headers,
      NETOAPI_ACTION: action
    },
    body: body
  };

  return new Promise((resolve, reject) => {
    post(options, (error, response, responseBody) => {
      // Catch any errors
      if (error) {
        return reject(error);
      }
      if (responseBody.Ack !== "Success") {
        return reject(responseBody.Messages);
      }

      resolve(responseBody);
    });
  });
}
