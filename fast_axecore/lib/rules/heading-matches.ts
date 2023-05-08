import { getRole } from '../commons/aria';

export default function headingMatches(_, virtualNode) {
  return getRole(virtualNode) === 'heading';
}
