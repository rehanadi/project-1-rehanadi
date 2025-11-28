export const getStatusVariant = (status: string) => {
  if (status === 'LATE') return 'danger';
  if (status === 'RETURNED') return 'outline';
  return 'success';
};

export const getStatusLabel = (status: string) => {
  if (status === 'BORROWED') return 'Active';
  if (status === 'RETURNED') return 'Returned';
  return 'Overdue';
};
