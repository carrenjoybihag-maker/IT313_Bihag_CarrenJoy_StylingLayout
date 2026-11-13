# IT313 – Laboratory 7: Styling & Layout in React Native

## Problem
Create a responsive IT313 Course Catalog screen that displays the five course offerings supplied in the laboratory PDF.

## Component structure
- **CourseCatalog** is the parent component. It stores the course array in state with `useState`, displays the page header, and maps each course into a `CourseCard` inside a `ScrollView`. Each card uses `key={course.id}`.
- **CourseCard** receives `id`, `code`, `title`, `units`, and `schedule` as props. It places the course-code badge beside the text block and displays wrapping tag chips.

## Requirements used
- `StyleSheet.create` organizes the styles.
- Flexbox uses `flexDirection: "row"` and `alignItems: "center"` for the badge and course information.
- The information block uses `flex: 1`.
- `useWindowDimensions()` calculates each card width as 92% of the available screen width, capped at 640 points.
- The tag row uses `flexDirection: "row"` and `flexWrap: "wrap"`.
- `Platform.select()` applies iOS shadow properties and Android `elevation`.

## Run the app in VS Code
1. Install Node.js (LTS) and VS Code.
2. Open this project folder in VS Code.
3. Open Terminal → New Terminal.
4. Run `npm install`.
5. Run `npx expo start`.
6. Scan the QR code using Expo Go, or press `a` for an Android emulator.

## Dimensions API experiment (required by the activity)
To demonstrate the difference, temporarily add `Dimensions` to the React Native import and replace the `useWindowDimensions` line inside `CourseCard` with:

```js
import {
  // keep the other imports
  Dimensions,
} from "react-native";

const { width } = Dimensions.get("window");
```

Rotate the device or resize the simulator and observe that this one-time value does not automatically update. Then restore:

```js
const { width } = useWindowDimensions();
```

The responsive card width should update when the available window size changes.

## Platform shadow comparison
On iOS, `Platform.select()` applies `shadowColor`, `shadowOffset`, `shadowOpacity`, and `shadowRadius`. On Android, it applies `elevation`. If only one platform/device is available, demonstrate it and explain the expected properties for the other platform.

## Files
- `App.js` – complete React Native screen.
- `README.md` – this guide.

The screen uses the exact five course records and course details supplied in the Laboratory 7 PDF. Styling choices such as colors and badge appearance are custom, as permitted by the activity.
"# IT313_Ontario_Francismie_Stylinglayout" 
