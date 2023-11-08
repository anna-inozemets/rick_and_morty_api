export const matchColorPoint = (status: string) => {
  switch (status) {
  case 'Alive':
    return '#55cc44';
  case 'Dead':
    return '#d63d2e';
  case 'unknown':
    return '#9e9e9e';
  default:
    return '#9e9e9e';
  }
};