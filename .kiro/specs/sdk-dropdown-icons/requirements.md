# Requirements Document

## Introduction

This feature adds visual SDK brand icons to the dropdown menu items in the sidebar SDK selector, improving visual recognition and consistency with the selected SDK display.

## Glossary

- **SDK Selector**: The dropdown component in the DocsSidebar that allows users to choose their preferred SDK
- **Dropdown Menu**: The menu that appears when clicking the SDK selector button
- **Brand Icon**: The visual icon representing each SDK (Terminal, FileCode2, FileCode, FileText, FileJson)
- **DropdownMenuItem**: Individual selectable items within the dropdown menu

## Requirements

### Requirement 1

**User Story:** As a user browsing the documentation, I want to see SDK icons in the dropdown menu, so that I can quickly identify and select my preferred SDK visually

#### Acceptance Criteria

1. WHEN the SDK dropdown menu is opened, THE DropdownMenuItem SHALL display the corresponding brand icon for each SDK
2. THE DropdownMenuItem SHALL render the icon inside the circular container with foreground background
3. THE DropdownMenuItem SHALL maintain consistent icon sizing at 3x3 (h-3 w-3) to match the selected SDK display
4. THE DropdownMenuItem SHALL display the icon, SDK name, and checkmark (when selected) in a horizontal layout
5. THE DropdownMenuItem SHALL preserve all existing styling and hover states
