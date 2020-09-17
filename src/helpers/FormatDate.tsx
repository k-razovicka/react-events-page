interface DateProps {
  (date: string): string;
}

export const formatDate: DateProps = (date: string): string => {
  const monthNames = [
    "janvāris",
    "februāris",
    "marts",
    "aprīlis",
    "maijs",
    "jūnijs",
    "jūlijs",
    "augusts",
    "septembris",
    "oktobris",
    "novembris",
    "decembris",
  ];

  const newDate = new Date(date);
  const day = newDate.getDate();
  return `${day}. ${monthNames[newDate.getMonth()]}`;
};
