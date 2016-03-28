import { Model } from 'backbone';

class Feed extends Model {
  // Default attributes for the news feed item
  defaults() {
    return {
      title: '',
      content: '',
      img: '',
      author: '',
      published: '',
      vertical: '',
      tags: '',
      country: ''
    };
  }
}

export default Feed;
