export class Quotes {
  showDescription: boolean;

  constructor(public id: number, public quote: string, public authorName: string, public submittedBy: string, public upvote: number, public downvote: number) {
    this.showDescription = false;
    this.id = id;
    this.quote = quote;
    this.authorName = authorName;
    this.submittedBy =submittedBy;
    this.upvote = upvote;
    this.downvote = upvote;
  }


}
