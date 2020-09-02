// find all the users that have not been linked
import { allUsers, linked } from './users';

function findUnlinkedUsers() {
  return allUsers.filter(({ id: userId }) => {
    return !linked.find(({ id: linkedId }) => {
      return linkedId === userId;
    });
  });
}
