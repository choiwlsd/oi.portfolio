/** GitHub Pages의 저장소 하위 경로를 포함한 public 파일 URL을 만듭니다. */
export function publicAssetPath(path: string) {
  return `${import.meta.env.BASE_URL}${path.replace(/^\/+/, "")}`;
}
