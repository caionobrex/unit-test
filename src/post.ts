export class Post {
  #id: string
  #likesCount: number

  constructor(id: string) {
    this.#id = id
    this.#likesCount = 0
  }

  incrementLikesCount() {
    this.#likesCount++
  }

  get id(): string {
    return this.#id
  }

  get likesCount(): number {
    return this.#likesCount
  }
}
