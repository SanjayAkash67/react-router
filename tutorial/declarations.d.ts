declare module "jsonfile" {
  interface JsonFile {
    readFile<T>(file: string): Promise<T>;
    writeFile<T>(file: string, obj: T): Promise<void>;
    // Add other methods if needed
  }

  const jsonfile: JsonFile;
  export = jsonfile;
}
