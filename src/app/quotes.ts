export class Quotes {
  showDescription: boolean;

  constructor(public id: number, public quote: string, public authorName: string, public submittedBy: string, public upvote: string, public downvote: string) {
    this.showDescription = false;
  }
}
