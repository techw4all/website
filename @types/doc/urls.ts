export type ActiveStatus = 'active' | 'disabled';

export type ShortUrlDocument = {
  readonly urlId: string;
  readonly userId: string;
  readonly alias: string;
  readonly fullUrl: string;
  readonly activeStatus: ActiveStatus;
  readonly createdAt: string;
  readonly updatedAt: string;
  readonly metadata: {
    readonly visitsCount: number;
    readonly lastSequence: number;
    readonly lastVisit: string | null;
    readonly firstVisit: string | null;
  };
};
