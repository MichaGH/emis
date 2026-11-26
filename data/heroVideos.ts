// Kandidáti na video do úvodnej sekcie — iba pre testovaciu stránku /test-video.
// Všetko Pexels License (bezplatné aj na komerčné použitie, autor nemusí byť
// uvedený). Prehrávajú sa priamo z Pexels CDN; vybrané video potom stiahneme.
export type HeroVideoGroup = "Strieborná hladina" | "Kvapky" | "Pohár a sklo" | "Horský potok";

export type HeroVideo = {
  id: string;
  group: HeroVideoGroup;
  label: string;
  /** stránka videa na Pexels */
  source: string;
  /** súbor pre desktop (≤ 1920 px) */
  hd: string;
  /** menší súbor pre mobil (~960 px) */
  sd: string;
  poster: string;
};

export const heroVideos: HeroVideo[] = [
  { id: "37934272", group: "Strieborná hladina", label: "Trblietavá hladina, čiernobielo", source: "https://www.pexels.com/video/sparkling-water-waves-in-black-and-white-37934272/", hd: "https://videos.pexels.com/video-files/37934272/16096233_1920_1080_30fps.mp4", sd: "https://videos.pexels.com/video-files/37934272/16096228_960_540_30fps.mp4", poster: "https://images.pexels.com/videos/37934272/pexels-photo-37934272.jpeg" },
  { id: "5138001", group: "Strieborná hladina", label: "Vlnky na jazere", source: "https://www.pexels.com/video/water-ripples-on-lake-5138001/", hd: "https://videos.pexels.com/video-files/5138001/5138001-hd_1280_720_30fps.mp4", sd: "https://videos.pexels.com/video-files/5138001/5138001-sd_960_540_30fps.mp4", poster: "https://images.pexels.com/videos/5138001/abstract-abstract-background-background-lake-5138001.jpeg" },
  { id: "4563075", group: "Strieborná hladina", label: "Hladina vody v tme", source: "https://www.pexels.com/video/video-footage-of-a-water-surface-4563075/", hd: "https://videos.pexels.com/video-files/4563075/4563075-hd_1920_1080_24fps.mp4", sd: "https://videos.pexels.com/video-files/4563075/4563075-sd_960_540_24fps.mp4", poster: "https://images.pexels.com/videos/4563075/4k-forest-hd-high-resolution-4563075.jpeg" },
  { id: "34308151", group: "Strieborná hladina", label: "Číra hladina s odleskami", source: "https://www.pexels.com/video/clear-water-surface-with-light-reflections-34308151/", hd: "https://videos.pexels.com/video-files/34308151/14534365_1920_1080_30fps.mp4", sd: "https://videos.pexels.com/video-files/34308151/14534363_960_540_30fps.mp4", poster: "https://images.pexels.com/videos/34308151/pexels-photo-34308151.jpeg" },
  { id: "37960264", group: "Strieborná hladina", label: "Vlnky s odrazom oblakov", source: "https://www.pexels.com/video/serene-water-ripples-reflecting-clouds-37960264/", hd: "https://videos.pexels.com/video-files/37960264/16107666_1920_1080_30fps.mp4", sd: "https://videos.pexels.com/video-files/37960264/16107664_960_540_30fps.mp4", poster: "https://images.pexels.com/videos/37960264/pexels-photo-37960264.jpeg" },
  { id: "33239592", group: "Strieborná hladina", label: "Kruhy na hladine, spomalene", source: "https://www.pexels.com/video/serene-water-ripples-in-slow-motion-33239592/", hd: "https://videos.pexels.com/video-files/33239592/14162335_1920_1080_60fps.mp4", sd: "https://videos.pexels.com/video-files/33239592/14162333_960_540_60fps.mp4", poster: "https://images.pexels.com/videos/33239592/drop-of-water-drops-of-water-openwater-outdoor-pond-33239592.jpeg" },
  { id: "26579952", group: "Strieborná hladina", label: "Pokojná vlna", source: "https://www.pexels.com/video/static-wave-26579952/", hd: "https://videos.pexels.com/video-files/26579952/11964175_1920_1080_30fps.mp4", sd: "https://videos.pexels.com/video-files/26579952/11964173_960_540_30fps.mp4", poster: "https://images.pexels.com/videos/26579952/above-water-air-beach-waves-meditation-26579952.jpeg" },
  { id: "16478020", group: "Kvapky", label: "Kvapka v tme", source: "https://www.pexels.com/video/a-water-drop-is-shown-in-the-water-16478020/", hd: "https://videos.pexels.com/video-files/16478020/16478020-hd_1920_1080_24fps.mp4", sd: "https://videos.pexels.com/video-files/16478020/16478020-sd_960_540_24fps.mp4", poster: "https://images.pexels.com/videos/16478020/4k-abstract-background-black-and-blue-16478020.jpeg" },
  { id: "9667531", group: "Kvapky", label: "Kvapky na pokojnej hladine", source: "https://www.pexels.com/video/close-up-shot-of-water-droplets-falling-onto-a-calm-water-9667531/", hd: "https://videos.pexels.com/video-files/9667531/9667531-hd_1920_1080_25fps.mp4", sd: "https://videos.pexels.com/video-files/9667531/9667531-sd_960_540_25fps.mp4", poster: "https://images.pexels.com/videos/9667531/abstract-animal-aquarium-art-9667531.jpeg" },
  { id: "2675514", group: "Kvapky", label: "Kvapky a kruhy na vode", source: "https://www.pexels.com/video/drops-of-water-creating-ripples-2675514/", hd: "https://videos.pexels.com/video-files/2675514/2675514-hd_1920_1080_24fps.mp4", sd: "https://videos.pexels.com/video-files/2675514/2675514-sd_960_540_24fps.mp4", poster: "https://images.pexels.com/videos/2675514/free-video-2675514.jpg" },
  { id: "10020411", group: "Pohár a sklo", label: "Bublinky v pohári", source: "https://www.pexels.com/video/close-up-of-soda-in-a-glass-10020411/", hd: "https://videos.pexels.com/video-files/10020411/10020411-hd_1366_720_30fps.mp4", sd: "https://videos.pexels.com/video-files/10020411/10020411-sd_960_506_30fps.mp4", poster: "https://images.pexels.com/videos/10020411/pexels-photo-10020411.jpeg" },
  { id: "3958714", group: "Pohár a sklo", label: "Studená voda v pohári", source: "https://www.pexels.com/video/cold-water-drink-glass-3958714/", hd: "https://videos.pexels.com/video-files/3958714/3958714-hd_1920_1080_30fps.mp4", sd: "https://videos.pexels.com/video-files/3958714/3958714-sd_960_540_30fps.mp4", poster: "https://images.pexels.com/videos/3958714/apple-juice-breakfast-cold-drink-3958714.jpeg" },
  { id: "7184590", group: "Pohár a sklo", label: "Nalievanie vody do pohára", source: "https://www.pexels.com/video/person-putting-water-into-a-glass-7184590/", hd: "https://videos.pexels.com/video-files/7184590/7184590-hd_1920_1080_24fps.mp4", sd: "https://videos.pexels.com/video-files/7184590/7184590-sd_960_540_24fps.mp4", poster: "https://images.pexels.com/videos/7184590/bottled-water-fills-glass-of-water-water-7184590.jpeg" },
  { id: "35574237", group: "Horský potok", label: "Horská bystrina", source: "https://www.pexels.com/video/majestic-mountain-stream-in-the-italian-alps-35574237/", hd: "https://videos.pexels.com/video-files/35574237/15074402_1920_1080_24fps.mp4", sd: "https://videos.pexels.com/video-files/35574237/15074397_960_540_24fps.mp4", poster: "https://images.pexels.com/videos/35574237/alpine-landscape-alpine-mountains-alpine-scenery-alpine-waterfall-35574237.jpeg" },
  { id: "27911718", group: "Horský potok", label: "Horský prameň", source: "https://www.pexels.com/video/himalayan-spring-27911718/", hd: "https://videos.pexels.com/video-files/27911718/12261291_1920_1080_25fps.mp4", sd: "https://videos.pexels.com/video-files/27911718/12261289_960_540_25fps.mp4", poster: "https://images.pexels.com/videos/27911718/himalayan-spring-27911718.jpeg" },
  { id: "18483699", group: "Horský potok", label: "Rieka v lese", source: "https://www.pexels.com/video/a-river-flowing-through-a-forested-area-with-rocks-18483699/", hd: "https://videos.pexels.com/video-files/18483699/18483699-hd_1920_1080_30fps.mp4", sd: "https://videos.pexels.com/video-files/18483699/18483699-sd_960_540_30fps.mp4", poster: "https://images.pexels.com/videos/18483699/pexels-photo-18483699.jpeg" },
  { id: "15776521", group: "Horský potok", label: "Plytká číra voda", source: "https://www.pexels.com/video/shallow-clear-water-with-ripples-on-the-surface-15776521/", hd: "https://videos.pexels.com/video-files/15776521/15776521-hd_1920_1080_30fps.mp4", sd: "https://videos.pexels.com/video-files/15776521/15776521-sd_960_540_30fps.mp4", poster: "https://images.pexels.com/videos/15776521/4k-footage-abstract-background-bay-15776521.jpeg" },
  { id: "1391007", group: "Horský potok", label: "Hladina so slnkom", source: "https://www.pexels.com/video/body-of-water-with-light-reflection-1391007/", hd: "https://videos.pexels.com/video-files/1391007/1391007-hd_1920_1080_30fps.mp4", sd: "https://videos.pexels.com/video-files/1391007/1391007-sd_960_540_30fps.mp4", poster: "https://images.pexels.com/videos/1391007/free-video-1391007.jpg" },
];

export function posterSrc(v: HeroVideo, width = 1920) {
  return `${v.poster}?auto=compress&cs=tinysrgb&w=${width}`;
}
