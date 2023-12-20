import { Post } from "./post"

export class User {
  #id: string
  #likedPosts: Post[]

  constructor(id: string, likedPosts?: Post[]) {
    this.#id = id
    this.#likedPosts = likedPosts ?? []
  }

  likes(post: Post) {
    if (this.#likedPosts.find((post) => post.id)) {
      throw new Error('Post already liked')
    }
    post.incrementLikesCount()
    this.#likedPosts.push(post)
  }

  get id(): string {
    return this.#id
  }

  get likedPosts(): Post[] {
    return this.#likedPosts
  }
}
