type itemGroupType = {
  text: string;
  name: string;
  placeholder: string;
  id: string;
};

type groupType = {
  role: string;
  startedOn: string;
  endOn: string;
  achievements: string[];
};

export default function formatEmploymentHistoryDetails(
  historyGroup: itemGroupType[][][],
) {
  let details: groupType;
  let achievements: string[] = [];
  let group: groupType[] = [];

  historyGroup.map((historyArray, index) => {
    historyArray.map((itemGroup) => {
      itemGroup.map((item, index) => {
        if (item.id.includes('achievement')) {
          if (index < historyGroup.length) {
            achievements = [...achievements, item.text];
            details = {
              ...details,
              [`achievements-${index}`]: achievements,
            };
          }
        } else {
          if (item.text) {
            details = { ...details, [item.name]: item.text };
          }
        }
      });
    });
    if (index < historyGroup.length) {
      group = [...group, details];
    }
  });

  return group;
}
