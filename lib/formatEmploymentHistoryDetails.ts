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
  let achievementObj: any = {};
  let group: groupType[] = [];

  historyGroup.map((historyArray, index) => {
    historyArray.map((itemGroup, idx) => {
      itemGroup.map((item) => {
        if (idx === 2) {
          achievements = [...achievements, item.text];
          achievementObj[`achievement-${index}${idx}`] = itemGroup;
          details = {
            ...details,
            [`achievement-${index}${idx}`]: itemGroup,
          };
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
  let detailGroup: any[] = [];
  group.map((item: any, index: number) => {
    const itemIndex = `achievement-${index}2`;
    detailGroup = [...detailGroup, { ...item, achievements: item[itemIndex] }];
  });
  return detailGroup;
}
