## Design Principle

Figma is the primary source of truth.

The website should reproduce the Figma design as accurately as possible.
Do not redesign, restyle, or add visual elements that are not present in Figma.

The final result should be:
- Responsive
- Functional
- Production-ready
- Ready to deploy

## Page Structure

- Desktop-1 is the main homepage.
- Main sections: navigation, HERO, ABOUT, WORKS, CONTACT, other info.
- WORKS contains multiple categories and project items.
- Some projects have their own detailed pages/frames in Figma.

## Navigation & Links

- Navigation buttons should scroll to the corresponding sections on the homepage.
- Project items in WORKS should open their corresponding project pages.
- Follow the interactions defined in Figma.

## Responsive Design

- The 1440px desktop design is the primary visual reference.
- The website must be fully responsive.
- Create appropriate layouts for tablet and mobile.
- Preserve the visual hierarchy and proportions of the desktop design.
- Do not simply scale down the desktop layout.

## Typography

- Prioritize the fonts used in the Figma design.
- Primary font: Microsoft YaHei UI
- If the font is unavailable, use a visually similar sans-serif font.
- Follow the typography, sizing, weight, spacing, and line breaks shown in Figma.
- Do not create a new typography system that is not present in the design.

## Colors

Use the colors from the Figma design as the primary reference.
Do not introduce additional colors unless necessary.

- Accent: #E7646A
- Black / Primary text: #000000
- Light gray: #D9D9D9
- White / Background: #FFFFFF

## Layout & Spacing

- The desktop layout is based on a 12-column grid in Figma.
- For desktop, follow the layout, spacing, alignment, and proportions shown in Figma.
- Do not impose an additional spacing system.
- For tablet and mobile, create responsive layouts based on the desktop design and maintain the original visual hierarchy.

## Images

- Use the images shown in Figma as the primary reference.
- Preserve the original aspect ratio and visual appearance of images.
- Do not arbitrarily crop, stretch, distort, filter, or add effects to images.
- For desktop, follow the image size, position, and cropping shown in Figma.
- For tablet and mobile, adapt image sizes and layout responsively while preserving the visual hierarchy.

## Interaction

- Implement the interactions defined in Figma.
- Do not add unnecessary interactions or animations.
- Additional animations and motion effects will be specified separately during implementation.

## Implementation

- Use the Figma design as the visual source of truth.
- Build the website with clean, maintainable, and reusable code.
- Keep the layout responsive and functional across desktop, tablet, and mobile.
- Implement all required navigation and interactions.
- Do not change the visual design unless necessary for responsiveness or technical implementation.
- The final website should be production-ready and deployable.

## Avoid

- Do not redesign or reinterpret the Figma design.
- Do not add unnecessary visual elements, colors, fonts, effects, or animations.
- Do not arbitrarily change spacing, proportions, image composition, or typography.
- Do not use placeholder images when the actual assets are available.
- Do not add unnecessary UI components or interactions.
- Do not sacrifice visual accuracy for unnecessary technical complexity.

### Interactive Elements

For important interactive elements, describe the interaction clearly.

- Clicking "navigation_name" should navigate to "CONTACT"section.
- Clicking "navigation_buttons_HOME" should navigate to the "HERO" section.
- Clicking "navigation_buttons_ABOUT" should navigate to the "ABOUT" section.
- Clicking "navigation_buttons_WORKS" should navigate to the "WORKS" section.
- Clicking "navigation_buttons_CONTACT" should navigate to the "CONTACT" section.

- Clicking "Industrial Design_BUTTON" should navigate to the "Desktop - 2" frame.
- Clicking "Industrial Design_project1" should navigate to the "Desktop - 3" frame.
- Clicking "Industrial Design_project2" should navigate to the "Desktop - 4" frame.
- Clicking "Industrial Design_project3" should navigate to the "Desktop - 5" frame.
- Clicking "Industrial Design_project4" should navigate to the "Desktop - 6" frame.
- Clicking "Industrial Design_project5" should navigate to the "Desktop - 7" frame.

- Clicking "Click here to watch C4D animation1 →X" should open the external link "https://b23.tv/ux0NDbz".
- Clicking "Click here to watch C4D animation2 →X" should open the external link "https://b23.tv/BxB9XYr".

- The "Drawing & Photography_images" and "Things I Like_images" sections should have interactive horizontal scrolling animations.
- In "Desktop - 1" through "Desktop - 7", the "navigation" frame should remain fixed at the top of the viewport.