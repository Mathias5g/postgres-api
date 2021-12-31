class Post {
  uuid?: string;
  title: string;
  content: string;
  userId: string;

  private constructor({ title, content, userId }: Post) {
    return Object.assign(this, {
      title,
      content,
      userId
    });
  }

  static create({ title, content, userId }: Post) {
    const post = new Post({ title, content, userId });
    return post;
  }
}

export { Post };