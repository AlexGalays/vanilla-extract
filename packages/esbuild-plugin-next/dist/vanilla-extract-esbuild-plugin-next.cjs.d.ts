import { IdentifierOption, CreateCompilerOptions } from '@vanilla-extract/integration';

type Platform = 'browser' | 'node' | 'neutral'
type Format = 'iife' | 'cjs' | 'esm'
type Loader = 'base64' | 'binary' | 'copy' | 'css' | 'dataurl' | 'default' | 'empty' | 'file' | 'js' | 'json' | 'jsx' | 'text' | 'ts' | 'tsx'
type LogLevel = 'verbose' | 'debug' | 'info' | 'warning' | 'error' | 'silent'
type Charset = 'ascii' | 'utf8'
type Drop = 'console' | 'debugger'

interface CommonOptions {
  /** Documentation: https://esbuild.github.io/api/#sourcemap */
  sourcemap?: boolean | 'linked' | 'inline' | 'external' | 'both'
  /** Documentation: https://esbuild.github.io/api/#legal-comments */
  legalComments?: 'none' | 'inline' | 'eof' | 'linked' | 'external'
  /** Documentation: https://esbuild.github.io/api/#source-root */
  sourceRoot?: string
  /** Documentation: https://esbuild.github.io/api/#sources-content */
  sourcesContent?: boolean

  /** Documentation: https://esbuild.github.io/api/#format */
  format?: Format
  /** Documentation: https://esbuild.github.io/api/#global-name */
  globalName?: string
  /** Documentation: https://esbuild.github.io/api/#target */
  target?: string | string[]
  /** Documentation: https://esbuild.github.io/api/#supported */
  supported?: Record<string, boolean>
  /** Documentation: https://esbuild.github.io/api/#platform */
  platform?: Platform

  /** Documentation: https://esbuild.github.io/api/#mangle-props */
  mangleProps?: RegExp
  /** Documentation: https://esbuild.github.io/api/#mangle-props */
  reserveProps?: RegExp
  /** Documentation: https://esbuild.github.io/api/#mangle-props */
  mangleQuoted?: boolean
  /** Documentation: https://esbuild.github.io/api/#mangle-props */
  mangleCache?: Record<string, string | false>
  /** Documentation: https://esbuild.github.io/api/#drop */
  drop?: Drop[]
  /** Documentation: https://esbuild.github.io/api/#minify */
  minify?: boolean
  /** Documentation: https://esbuild.github.io/api/#minify */
  minifyWhitespace?: boolean
  /** Documentation: https://esbuild.github.io/api/#minify */
  minifyIdentifiers?: boolean
  /** Documentation: https://esbuild.github.io/api/#minify */
  minifySyntax?: boolean
  /** Documentation: https://esbuild.github.io/api/#charset */
  charset?: Charset
  /** Documentation: https://esbuild.github.io/api/#tree-shaking */
  treeShaking?: boolean
  /** Documentation: https://esbuild.github.io/api/#ignore-annotations */
  ignoreAnnotations?: boolean

  /** Documentation: https://esbuild.github.io/api/#jsx */
  jsx?: 'transform' | 'preserve' | 'automatic'
  /** Documentation: https://esbuild.github.io/api/#jsx-factory */
  jsxFactory?: string
  /** Documentation: https://esbuild.github.io/api/#jsx-fragment */
  jsxFragment?: string
  /** Documentation: https://esbuild.github.io/api/#jsx-import-source */
  jsxImportSource?: string
  /** Documentation: https://esbuild.github.io/api/#jsx-development */
  jsxDev?: boolean
  /** Documentation: https://esbuild.github.io/api/#jsx-side-effects */
  jsxSideEffects?: boolean

  /** Documentation: https://esbuild.github.io/api/#define */
  define?: { [key: string]: string }
  /** Documentation: https://esbuild.github.io/api/#pure */
  pure?: string[]
  /** Documentation: https://esbuild.github.io/api/#keep-names */
  keepNames?: boolean

  /** Documentation: https://esbuild.github.io/api/#color */
  color?: boolean
  /** Documentation: https://esbuild.github.io/api/#log-level */
  logLevel?: LogLevel
  /** Documentation: https://esbuild.github.io/api/#log-limit */
  logLimit?: number
  /** Documentation: https://esbuild.github.io/api/#log-override */
  logOverride?: Record<string, LogLevel>
}

interface BuildOptions extends CommonOptions {
  /** Documentation: https://esbuild.github.io/api/#bundle */
  bundle?: boolean
  /** Documentation: https://esbuild.github.io/api/#splitting */
  splitting?: boolean
  /** Documentation: https://esbuild.github.io/api/#preserve-symlinks */
  preserveSymlinks?: boolean
  /** Documentation: https://esbuild.github.io/api/#outfile */
  outfile?: string
  /** Documentation: https://esbuild.github.io/api/#metafile */
  metafile?: boolean
  /** Documentation: https://esbuild.github.io/api/#outdir */
  outdir?: string
  /** Documentation: https://esbuild.github.io/api/#outbase */
  outbase?: string
  /** Documentation: https://esbuild.github.io/api/#external */
  external?: string[]
  /** Documentation: https://esbuild.github.io/api/#packages */
  packages?: 'external'
  /** Documentation: https://esbuild.github.io/api/#alias */
  alias?: Record<string, string>
  /** Documentation: https://esbuild.github.io/api/#loader */
  loader?: { [ext: string]: Loader }
  /** Documentation: https://esbuild.github.io/api/#resolve-extensions */
  resolveExtensions?: string[]
  /** Documentation: https://esbuild.github.io/api/#main-fields */
  mainFields?: string[]
  /** Documentation: https://esbuild.github.io/api/#conditions */
  conditions?: string[]
  /** Documentation: https://esbuild.github.io/api/#write */
  write?: boolean
  /** Documentation: https://esbuild.github.io/api/#allow-overwrite */
  allowOverwrite?: boolean
  /** Documentation: https://esbuild.github.io/api/#tsconfig */
  tsconfig?: string
  /** Documentation: https://esbuild.github.io/api/#out-extension */
  outExtension?: { [ext: string]: string }
  /** Documentation: https://esbuild.github.io/api/#public-path */
  publicPath?: string
  /** Documentation: https://esbuild.github.io/api/#entry-names */
  entryNames?: string
  /** Documentation: https://esbuild.github.io/api/#chunk-names */
  chunkNames?: string
  /** Documentation: https://esbuild.github.io/api/#asset-names */
  assetNames?: string
  /** Documentation: https://esbuild.github.io/api/#inject */
  inject?: string[]
  /** Documentation: https://esbuild.github.io/api/#banner */
  banner?: { [type: string]: string }
  /** Documentation: https://esbuild.github.io/api/#footer */
  footer?: { [type: string]: string }
  /** Documentation: https://esbuild.github.io/api/#entry-points */
  entryPoints?: string[] | Record<string, string> | { in: string, out: string }[]
  /** Documentation: https://esbuild.github.io/api/#stdin */
  stdin?: StdinOptions
  /** Documentation: https://esbuild.github.io/plugins/ */
  plugins?: Plugin[]
  /** Documentation: https://esbuild.github.io/api/#working-directory */
  absWorkingDir?: string
  /** Documentation: https://esbuild.github.io/api/#node-paths */
  nodePaths?: string[]; // The "NODE_PATH" variable from Node.js
}

interface StdinOptions {
  contents: string | Uint8Array
  resolveDir?: string
  sourcefile?: string
  loader?: Loader
}

interface Message {
  id: string
  pluginName: string
  text: string
  location: Location | null
  notes: Note[]

  /**
   * Optional user-specified data that is passed through unmodified. You can
   * use this to stash the original error, for example.
   */
  detail: any
}

interface Note {
  text: string
  location: Location | null
}

interface Location {
  file: string
  namespace: string
  /** 1-based */
  line: number
  /** 0-based, in bytes */
  column: number
  /** in bytes */
  length: number
  lineText: string
  suggestion: string
}

interface OutputFile {
  path: string
  /** "text" as bytes */
  contents: Uint8Array
  /** "contents" as text (changes automatically with "contents") */
  readonly text: string
}

interface BuildResult<SpecificOptions extends BuildOptions = BuildOptions> {
  errors: Message[]
  warnings: Message[]
  /** Only when "write: false" */
  outputFiles: OutputFile[] | (SpecificOptions['write'] extends false ? never : undefined)
  /** Only when "metafile: true" */
  metafile: Metafile | (SpecificOptions['metafile'] extends true ? never : undefined)
  /** Only when "mangleCache" is present */
  mangleCache: Record<string, string | false> | (SpecificOptions['mangleCache'] extends Object ? never : undefined)
}

/** Documentation: https://esbuild.github.io/api/#serve-arguments */
interface ServeOptions {
  port?: number
  host?: string
  servedir?: string
  keyfile?: string
  certfile?: string
  onRequest?: (args: ServeOnRequestArgs) => void
}

interface ServeOnRequestArgs {
  remoteAddress: string
  method: string
  path: string
  status: number
  /** The time to generate the response, not to send it */
  timeInMS: number
}

/** Documentation: https://esbuild.github.io/api/#serve-return-values */
interface ServeResult {
  port: number
  host: string
}

interface TransformOptions extends CommonOptions {
  tsconfigRaw?: string | {
    compilerOptions?: {
      alwaysStrict?: boolean,
      importsNotUsedAsValues?: 'remove' | 'preserve' | 'error',
      jsx?: 'react' | 'react-jsx' | 'react-jsxdev' | 'preserve',
      jsxFactory?: string,
      jsxFragmentFactory?: string,
      jsxImportSource?: string,
      preserveValueImports?: boolean,
      target?: string,
      useDefineForClassFields?: boolean,
    },
  }

  sourcefile?: string
  loader?: Loader
  banner?: string
  footer?: string
}

interface TransformResult<SpecificOptions extends TransformOptions = TransformOptions> {
  code: string
  map: string
  warnings: Message[]
  /** Only when "mangleCache" is present */
  mangleCache: Record<string, string | false> | (SpecificOptions['mangleCache'] extends Object ? never : undefined)
  /** Only when "legalComments" is "external" */
  legalComments: string | (SpecificOptions['legalComments'] extends 'external' ? never : undefined)
}

interface Plugin {
  name: string
  setup: (build: PluginBuild) => (void | Promise<void>)
}

interface PluginBuild {
  /** Documentation: https://esbuild.github.io/plugins/#build-options */
  initialOptions: BuildOptions

  /** Documentation: https://esbuild.github.io/plugins/#resolve */
  resolve(path: string, options?: ResolveOptions): Promise<ResolveResult>

  /** Documentation: https://esbuild.github.io/plugins/#on-start */
  onStart(callback: () =>
    (OnStartResult | null | void | Promise<OnStartResult | null | void>)): void

  /** Documentation: https://esbuild.github.io/plugins/#on-end */
  onEnd(callback: (result: BuildResult) =>
    (OnEndResult | null | void | Promise<OnEndResult | null | void>)): void

  /** Documentation: https://esbuild.github.io/plugins/#on-resolve */
  onResolve(options: OnResolveOptions, callback: (args: OnResolveArgs) =>
    (OnResolveResult | null | undefined | Promise<OnResolveResult | null | undefined>)): void

  /** Documentation: https://esbuild.github.io/plugins/#on-load */
  onLoad(options: OnLoadOptions, callback: (args: OnLoadArgs) =>
    (OnLoadResult | null | undefined | Promise<OnLoadResult | null | undefined>)): void

  /** Documentation: https://esbuild.github.io/plugins/#on-dispose */
  onDispose(callback: () => void): void

  // This is a full copy of the esbuild library in case you need it
  esbuild: {
    context: typeof context,
    build: typeof build,
    buildSync: typeof buildSync,
    transform: typeof transform,
    transformSync: typeof transformSync,
    formatMessages: typeof formatMessages,
    formatMessagesSync: typeof formatMessagesSync,
    analyzeMetafile: typeof analyzeMetafile,
    analyzeMetafileSync: typeof analyzeMetafileSync,
    initialize: typeof initialize,
    version: typeof version,
  }
}

/** Documentation: https://esbuild.github.io/plugins/#resolve-options */
interface ResolveOptions {
  pluginName?: string
  importer?: string
  namespace?: string
  resolveDir?: string
  kind?: ImportKind
  pluginData?: any
}

/** Documentation: https://esbuild.github.io/plugins/#resolve-results */
interface ResolveResult {
  errors: Message[]
  warnings: Message[]

  path: string
  external: boolean
  sideEffects: boolean
  namespace: string
  suffix: string
  pluginData: any
}

interface OnStartResult {
  errors?: PartialMessage[]
  warnings?: PartialMessage[]
}

interface OnEndResult {
  errors?: PartialMessage[]
  warnings?: PartialMessage[]
}

/** Documentation: https://esbuild.github.io/plugins/#on-resolve-options */
interface OnResolveOptions {
  filter: RegExp
  namespace?: string
}

/** Documentation: https://esbuild.github.io/plugins/#on-resolve-arguments */
interface OnResolveArgs {
  path: string
  importer: string
  namespace: string
  resolveDir: string
  kind: ImportKind
  pluginData: any
}

type ImportKind =
  | 'entry-point'

  // JS
  | 'import-statement'
  | 'require-call'
  | 'dynamic-import'
  | 'require-resolve'

  // CSS
  | 'import-rule'
  | 'url-token'

/** Documentation: https://esbuild.github.io/plugins/#on-resolve-results */
interface OnResolveResult {
  pluginName?: string

  errors?: PartialMessage[]
  warnings?: PartialMessage[]

  path?: string
  external?: boolean
  sideEffects?: boolean
  namespace?: string
  suffix?: string
  pluginData?: any

  watchFiles?: string[]
  watchDirs?: string[]
}

/** Documentation: https://esbuild.github.io/plugins/#on-load-options */
interface OnLoadOptions {
  filter: RegExp
  namespace?: string
}

/** Documentation: https://esbuild.github.io/plugins/#on-load-arguments */
interface OnLoadArgs {
  path: string
  namespace: string
  suffix: string
  pluginData: any
}

/** Documentation: https://esbuild.github.io/plugins/#on-load-results */
interface OnLoadResult {
  pluginName?: string

  errors?: PartialMessage[]
  warnings?: PartialMessage[]

  contents?: string | Uint8Array
  resolveDir?: string
  loader?: Loader
  pluginData?: any

  watchFiles?: string[]
  watchDirs?: string[]
}

interface PartialMessage {
  id?: string
  pluginName?: string
  text?: string
  location?: Partial<Location> | null
  notes?: PartialNote[]
  detail?: any
}

interface PartialNote {
  text?: string
  location?: Partial<Location> | null
}

/** Documentation: https://esbuild.github.io/api/#metafile */
interface Metafile {
  inputs: {
    [path: string]: {
      bytes: number
      imports: {
        path: string
        kind: ImportKind
        external?: boolean
        original?: string
      }[]
      format?: 'cjs' | 'esm'
    }
  }
  outputs: {
    [path: string]: {
      bytes: number
      inputs: {
        [path: string]: {
          bytesInOutput: number
        }
      }
      imports: {
        path: string
        kind: ImportKind | 'file-loader'
        external?: boolean
      }[]
      exports: string[]
      entryPoint?: string
      cssBundle?: string
    }
  }
}

interface FormatMessagesOptions {
  kind: 'error' | 'warning'
  color?: boolean
  terminalWidth?: number
}

interface AnalyzeMetafileOptions {
  color?: boolean
  verbose?: boolean
}

interface WatchOptions {
}

interface BuildContext<SpecificOptions extends BuildOptions = BuildOptions> {
  /** Documentation: https://esbuild.github.io/api/#rebuild */
  rebuild(): Promise<BuildResult<SpecificOptions>>

  /** Documentation: https://esbuild.github.io/api/#watch */
  watch(options?: WatchOptions): Promise<void>

  /** Documentation: https://esbuild.github.io/api/#serve */
  serve(options?: ServeOptions): Promise<ServeResult>

  cancel(): Promise<void>
  dispose(): Promise<void>
}

/**
 * This function invokes the "esbuild" command-line tool for you. It returns a
 * promise that either resolves with a "BuildResult" object or rejects with a
 * "BuildFailure" object.
 *
 * - Works in node: yes
 * - Works in browser: yes
 *
 * Documentation: https://esbuild.github.io/api/#build
 */
declare function build<SpecificOptions extends BuildOptions>(options: SpecificOptions): Promise<BuildResult<SpecificOptions>>
declare function build(options: BuildOptions): Promise<BuildResult>

/**
 * This is the advanced long-running form of "build" that supports additional
 * features such as watch mode and a local development server.
 *
 * - Works in node: yes
 * - Works in browser: no
 *
 * Documentation: https://esbuild.github.io/api/#build
 */
declare function context<T extends BuildOptions>(options: T): Promise<BuildContext<T>>
declare function context(options: BuildOptions): Promise<BuildContext>

/**
 * This function transforms a single JavaScript file. It can be used to minify
 * JavaScript, convert TypeScript/JSX to JavaScript, or convert newer JavaScript
 * to older JavaScript. It returns a promise that is either resolved with a
 * "TransformResult" object or rejected with a "TransformFailure" object.
 *
 * - Works in node: yes
 * - Works in browser: yes
 *
 * Documentation: https://esbuild.github.io/api/#transform
 */
declare function transform<SpecificOptions extends TransformOptions>(input: string | Uint8Array, options?: SpecificOptions): Promise<TransformResult<SpecificOptions>>
declare function transform(input: string | Uint8Array, options?: TransformOptions): Promise<TransformResult>

/**
 * Converts log messages to formatted message strings suitable for printing in
 * the terminal. This allows you to reuse the built-in behavior of esbuild's
 * log message formatter. This is a batch-oriented API for efficiency.
 *
 * - Works in node: yes
 * - Works in browser: yes
 */
declare function formatMessages(messages: PartialMessage[], options: FormatMessagesOptions): Promise<string[]>

/**
 * Pretty-prints an analysis of the metafile JSON to a string. This is just for
 * convenience to be able to match esbuild's pretty-printing exactly. If you want
 * to customize it, you can just inspect the data in the metafile yourself.
 *
 * - Works in node: yes
 * - Works in browser: yes
 *
 * Documentation: https://esbuild.github.io/api/#analyze
 */
declare function analyzeMetafile(metafile: Metafile | string, options?: AnalyzeMetafileOptions): Promise<string>

/**
 * A synchronous version of "build".
 *
 * - Works in node: yes
 * - Works in browser: no
 *
 * Documentation: https://esbuild.github.io/api/#build
 */
declare function buildSync<SpecificOptions extends BuildOptions>(options: SpecificOptions): BuildResult<SpecificOptions>
declare function buildSync(options: BuildOptions): BuildResult

/**
 * A synchronous version of "transform".
 *
 * - Works in node: yes
 * - Works in browser: no
 *
 * Documentation: https://esbuild.github.io/api/#transform
 */
declare function transformSync<SpecificOptions extends TransformOptions>(input: string, options?: SpecificOptions): TransformResult<SpecificOptions>
declare function transformSync(input: string | Uint8Array, options?: TransformOptions): TransformResult

/**
 * A synchronous version of "formatMessages".
 *
 * - Works in node: yes
 * - Works in browser: no
 */
declare function formatMessagesSync(messages: PartialMessage[], options: FormatMessagesOptions): string[]

/**
 * A synchronous version of "analyzeMetafile".
 *
 * - Works in node: yes
 * - Works in browser: no
 *
 * Documentation: https://esbuild.github.io/api/#analyze
 */
declare function analyzeMetafileSync(metafile: Metafile | string, options?: AnalyzeMetafileOptions): string

/**
 * This configures the browser-based version of esbuild. It is necessary to
 * call this first and wait for the returned promise to be resolved before
 * making other API calls when using esbuild in the browser.
 *
 * - Works in node: yes
 * - Works in browser: yes ("options" is required)
 *
 * Documentation: https://esbuild.github.io/api/#browser
 */
declare function initialize(options: InitializeOptions): Promise<void>

interface InitializeOptions {
  /**
   * The URL of the "esbuild.wasm" file. This must be provided when running
   * esbuild in the browser.
   */
  wasmURL?: string | URL

  /**
   * The result of calling "new WebAssembly.Module(buffer)" where "buffer"
   * is a typed array or ArrayBuffer containing the binary code of the
   * "esbuild.wasm" file.
   *
   * You can use this as an alternative to "wasmURL" for environments where it's
   * not possible to download the WebAssembly module.
   */
  wasmModule?: WebAssembly.Module

  /**
   * By default esbuild runs the WebAssembly-based browser API in a web worker
   * to avoid blocking the UI thread. This can be disabled by setting "worker"
   * to false.
   */
  worker?: boolean
}

declare let version: string

interface VanillaExtractPluginOptions {
    outputCss?: boolean;
    runtime?: boolean;
    processCss?: (css: string) => Promise<string>;
    identifiers?: IdentifierOption;
    compilerVitePlugins?: CreateCompilerOptions['vitePlugins'];
}
declare function vanillaExtractPlugin({ outputCss, runtime, processCss, identifiers: identOption, compilerVitePlugins: vitePlugins, }?: VanillaExtractPluginOptions): Plugin;

export { vanillaExtractPlugin };
