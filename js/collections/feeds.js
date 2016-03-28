import _ from 'underscore';
import { Collection } from 'backbone';
import Feed from 'models/feed';

class FeedsCollection extends Collection {
  constructor(models, options) {
    // Reference to this collection's model.
    this.model = Feed;
    super(models, options);
  }
}

export default new FeedsCollection();
