export class LoadingPageError extends Error {
  constructor(message = "Could Not Load Page") {
    super(message);
    this.name = "LoadingPageError";
  }
}
