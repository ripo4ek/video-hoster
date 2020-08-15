import { IGenere } from "./IGenere";
import { ITitleType } from "./ITitleType";
import { ITitleStatus } from "./ITitleStatus";
import { IDateRange } from "./IDateRange";
export interface ITitleBase {
  id: number;
  name: string;
  posterUrl: string;
  isFinished: boolean;
  treeId: number;
  titleDetailsId: number;
  userRating: number;
  generes: Array<IGenere>;
  titleType: ITitleType;
  status: ITitleStatus;
  dateRange: IDateRange;
  description: string;
  lastUpdated: Date;
  episodeReleaseTime: Date;
  lastReleasedEpisodeNumber: number;
  addedOnSite: Date;
}
