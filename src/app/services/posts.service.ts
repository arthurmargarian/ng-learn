import {Injectable} from '@angular/core';

export interface Post {
  title: string
  text: string
  id: number
}

@Injectable({
  providedIn: 'root'
})
export class PostsService {
  posts: Post[] = [
    {title: 'Post1', text: 'some text for post 1', id: 11},
    {title: 'Post2', text: 'some text for post 2', id: 22},
    {title: 'Post3', text: 'some text for post 3', id: 33},
    {title: 'Post4', text: 'some text for post 4', id: 44},
    {title: 'Post5', text: 'some text for post 5', id: 55},
  ];

  getById(id: number) {
    return this.posts.find(p => p.id === id);
  }
}
