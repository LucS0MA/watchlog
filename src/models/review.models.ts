export class Review {
  comment: string;
  created_at: Date;
  movie_id: number;
  rating: number;
  user_id: number;
  constructor(
    comment: string,
    created_at: Date,
    movie_id: number,
    rating: number,
    user_id: number,
  ) {
    this.comment = comment;
    this.created_at = created_at;
    this.movie_id = movie_id;
    this.rating = rating;
    this.user_id = user_id;
  }
}
