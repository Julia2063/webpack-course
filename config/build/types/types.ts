export interface BuildPaths {
    entry: string;
    html: string;
    public: string;
    output: string;
    src: string;

}

export type BuildMode = 'production' | 'development';
export type BuildPlatform = 'desktop' | 'mobile';

export interface BuildOptions {
    port: number;
    paths: BuildPaths;
    mode: BuildMode;
    platform: BuildPlatform;
    analyzer?: boolean;
}