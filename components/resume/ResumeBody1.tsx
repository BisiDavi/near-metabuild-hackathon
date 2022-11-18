import { Text, View } from '@react-pdf/renderer';

import { resumeDocumentStyle } from '@/styles/resumeDocumentStyle';
import { ResumeAside1 } from '@/types/interfaces';

type itemGroupType = {
  text: string;
  name: string;
  placeholder: string;
  id: string;
};

export default function ResumeBody1({ dCvs }: ResumeAside1) {
  const styles = resumeDocumentStyle;
  const { profile, employmentHistory, references } = dCvs;

  function formatEmploymentHistory(itemGroup: itemGroupType) {
    let details = {};
    details = { ...details, [itemGroup.name]: itemGroup.text };
    return details;
  }

  function formatVB(items: itemGroupType[]) {
    let details = {};
    let achievements: string[] = [];

    items.map((item) => {
      if (!item.id.includes('achievement')) {
        details = { ...details, [item.name]: item.text };
      } else {
        achievements = [...achievements, item.text];
        details = { ...details, achievements };
      }
    });
    return details;
  }

  return (
    <View style={styles.section}>
      <Text style={styles.heading}>Profile</Text>
      <Text style={styles.text}>{profile.intro}</Text>
      <View style={styles.subsection}>
        <Text style={styles.subheading}>Employment History</Text>
        {employmentHistory.map((historyGroup, index) => {
          return (
            <div className="historyGroup" key={index}>
              {historyGroup.map((employmentItemGroup, idx) => {
                const trev = formatVB(employmentItemGroup);
                console.log('trev', trev);
                return (
                  <div className="employmentItemGroup" key={idx}>
                    {employmentItemGroup.map((itemGroup, itemIdx) => {
                      const employmentDetails =
                        formatEmploymentHistory(itemGroup);
                      console.log('employmentDetails', employmentDetails);
                      return <div className="itemGroup" key={itemIdx}></div>;
                    })}
                  </div>
                );
              })}
            </div>
          );
        })}
        <Text style={styles.h4}>
          Branch Customer Service Representative, AT&T Inc., Seattle
        </Text>
        <Text style={styles.date}>AUGUST 2014 - SEPTEMBER 2020</Text>
        <View style={styles.listGroup}>
          <Text style={styles.text}>
            - Maintained up to date knowledge of products and services.
          </Text>
          <Text style={styles.text}>
            - Handled customer calls and responded to queries about services,
            product malfunctions, promotions and billing.
          </Text>
          <Text style={styles.text}>
            - Worked to address all customer concerns in a timely and effective
            manner.
          </Text>
        </View>
      </View>
      <View>
        <Text style={styles.subheading}>
          Customer Service Representation, Anglo Hotel, NYC
        </Text>
        <Text style={styles.date}>AUGUST 2010 - AUGUST 2014</Text>
        <View style={styles.listGroup}>
          <Text style={styles.text}>
            - Provided High quality customer service to customers.
          </Text>
          <Text style={styles.text}>
            - Handled Sales transactions and returns in a timely manner
          </Text>
          <Text style={styles.text}>
            - Greeted customers in a friendly and helpful manner
          </Text>
        </View>
      </View>
      <View>
        <Text style={styles.subheading}>Education</Text>
        <Text style={styles.text}>
          Bachelor of Communications, University of Seattle, Seattle
        </Text>
        <Text style={styles.date}>AUGUST 2007 - May 2011</Text>
        <Text style={styles.text}>- Graduated with High Honours.</Text>
        <Text style={styles.text}>
          - High School Diploma, Hartwick High School, Hartwick
        </Text>
        <Text style={styles.date}>AUGUST 2007 - May 2011</Text>
      </View>
      <View>
        <Text style={styles.subheading}>References</Text>
        <Text style={styles.text}>David Leeds from Anglo Hotel</Text>
        <Text style={styles.text}>dleeds@anglo.com | 732-189-0909</Text>
        <Text style={styles.text}>Cole Kenny from AT&T</Text>
        <Text style={styles.text}>kennycole@att.com | 934-289-0209</Text>
      </View>
    </View>
  );
}
