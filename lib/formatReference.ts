type referencesType = {
  text: string;
  name: string;
  placeholder: string;
  id: string;
}[][];

export function formatReferences(references: referencesType) {
  let fReferences: any[] = [];
  let dvb: any;
  references.map((referencesItem, index) => {
    referencesItem.map((item) => {
      dvb = { ...dvb, [item.name]: item.text };
    });
    fReferences = [...fReferences, dvb];
  });
  return fReferences;
}
