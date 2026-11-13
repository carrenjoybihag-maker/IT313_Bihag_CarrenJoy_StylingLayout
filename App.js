import React, { useState } from "react";
import {
  SafeAreaView,
  ScrollView,
  View,
  Text,
  StyleSheet,
  Platform,
  useWindowDimensions,
  StatusBar,
} from "react-native";

// One card displays the details of one course.
function CourseCard({ id, code, title, units, schedule }) {
  // This hook updates the card width when the screen rotates or resizes.
  const { width } = useWindowDimensions();

  return (
    <View style={[styles.card, { width: Math.min(width * 0.92, 640) }]}>
      <View style={styles.courseRow}>
        <View style={styles.codeBadge}>
          <Text style={styles.codeText}>{code}</Text>
        </View>

        <View style={styles.courseInfo}>
          <Text style={styles.courseTitle}>{title}</Text>
          <Text style={styles.schedule}>{schedule}</Text>
        </View>
      </View>

      <View style={styles.tagRow}>
        <View style={styles.tag}>
          <Text style={styles.tagText}>{units} units</Text>
        </View>
        <View style={styles.tag}>
          <Text style={styles.tagText}>Lecture</Text>
        </View>
        <View style={styles.tag}>
          <Text style={styles.tagText}>First Semester</Text>
        </View>
      </View>
    </View>
  );
}

// The parent component stores the course data and displays the list.
export default function CourseCatalog() {
  const [courses] = useState([
    {
      id: "c1",
      code: "IT313",
      title: "Mobile Programming",
      units: 3,
      schedule: "MWF 8:00–9:00 AM",
    },
    {
      id: "c2",
      code: "IT311",
      title: "Systems Integration",
      units: 3,
      schedule: "TTh 9:30–11:00 AM",
    },
    {
      id: "c3",
      code: "IT321",
      title: "Information Assurance",
      units: 3,
      schedule: "MWF 1:00–2:00 PM",
    },
    {
      id: "c4",
      code: "IT331",
      title: "Web Systems & Technologies",
      units: 3,
      schedule: "TTh 1:00–2:30 PM",
    },
    {
      id: "c5",
      code: "IT341",
      title: "Human-Computer Interaction",
      units: 3,
      schedule: "MWF 3:00–4:00 PM",
    },
  ]);

  return (
    <SafeAreaView style={styles.safeArea}>
      <StatusBar barStyle="dark-content" backgroundColor="#F5F3FF" />

      <View style={styles.header}>
        <Text style={styles.eyebrow}>STUDENT PORTAL</Text>
        <Text style={styles.heading}>Course Catalog</Text>
        <Text style={styles.subtitle}>
          Explore this semester's course offerings.
        </Text>
      </View>

      <ScrollView
        style={styles.scrollView}
        contentContainerStyle={styles.listContent}
        showsVerticalScrollIndicator={false}
      >
        {courses.map((course) => (
          <CourseCard
            key={course.id}
            id={course.id}
            code={course.code}
            title={course.title}
            units={course.units}
            schedule={course.schedule}
          />
        ))}
        <Text style={styles.footer}>IT 313 • Mobile Programming</Text>
      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  safeArea: {
    flex: 1,
    backgroundColor: "#F5F3FF",
  },
  header: {
    paddingHorizontal: 20,
    paddingTop: 24,
    paddingBottom: 18,
  },
  eyebrow: {
    color: "#7C3AED",
    fontSize: 11,
    fontWeight: "800",
    letterSpacing: 1.6,
    marginBottom: 7,
  },
  heading: {
    color: "#211A35",
    fontSize: 29,
    fontWeight: "800",
  },
  subtitle: {
    color: "#777187",
    fontSize: 14,
    marginTop: 6,
  },
  scrollView: {
    flex: 1,
  },
  listContent: {
    alignItems: "center",
    paddingTop: 4,
    paddingBottom: 28,
  },
  card: {
    backgroundColor: "#FFFFFF",
    borderRadius: 18,
    padding: 16,
    marginBottom: 14,
    borderWidth: 1,
    borderColor: "#EEEAF7",
    ...Platform.select({
      ios: {
        shadowColor: "#24143D",
        shadowOffset: { width: 0, height: 4 },
        shadowOpacity: 0.10,
        shadowRadius: 9,
      },
      android: {
        elevation: 4,
      },
      default: {
        shadowColor: "#24143D",
        shadowOffset: { width: 0, height: 3 },
        shadowOpacity: 0.08,
        shadowRadius: 6,
      },
    }),
  },
  courseRow: {
    flexDirection: "row",
    alignItems: "center",
  },
  codeBadge: {
    width: 76,
    minHeight: 58,
    borderRadius: 13,
    backgroundColor: "#6D28D9",
    alignItems: "center",
    justifyContent: "center",
    paddingHorizontal: 5,
  },
  codeText: {
    color: "#FFFFFF",
    fontSize: 13,
    fontWeight: "800",
  },
  courseInfo: {
    flex: 1,
    marginLeft: 14,
  },
  courseTitle: {
    color: "#29223B",
    fontSize: 16,
    fontWeight: "700",
    lineHeight: 21,
  },
  schedule: {
    color: "#817B8F",
    fontSize: 12,
    marginTop: 5,
  },
  tagRow: {
    flexDirection: "row",
    flexWrap: "wrap",
    marginTop: 15,
    gap: 7,
  },
  tag: {
    backgroundColor: "#F1ECFF",
    borderRadius: 20,
    paddingHorizontal: 11,
    paddingVertical: 6,
  },
  tagText: {
    color: "#6336B5",
    fontSize: 11,
    fontWeight: "600",
  },
  footer: {
    color: "#A19AAD",
    fontSize: 11,
    marginTop: 5,
    marginBottom: 12,
  },
});
