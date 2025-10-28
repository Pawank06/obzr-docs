# Design Document: SDK Dropdown Icons

## Overview

This design adds SDK brand icons to the dropdown menu items in the DocsSidebar component. The icons are already defined in the `sdks` array but are not currently being rendered in the dropdown items.

## Architecture

The solution involves modifying the `DropdownMenuItem` rendering logic in the `DocsSidebar` component to include the icon element that matches the selected SDK button's visual style.

### Component Hierarchy
```
DocsSidebar
└── DropdownMenu
    └── DropdownMenuContent
        └── DropdownMenuItem (for each SDK)
            ├── Icon container (circular background)
            │   └── Icon component
            ├── SDK name
            └── Check icon (if selected)
```

## Components and Interfaces

### Modified Component: DocsSidebar

**Location:** `components/docs-sidebar.tsx`

**Current Implementation:**
```tsx
<DropdownMenuItem>
  <div className="flex h-4 w-4 items-center justify-center rounded-full bg-foreground text-background">
    {/* Empty - no icon rendered */}
  </div>
  <span className="flex-1 text-xs">{sdk.name}</span>
  {selectedSdk.name === sdk.name && (
    <Check className="h-3.5 w-3.5 text-foreground" />
  )}
</DropdownMenuItem>
```

**Design Changes:**
Render the SDK icon inside the circular container using `React.createElement()` to match the selected SDK button pattern.

## Implementation Strategy

### Icon Rendering

The icon should be rendered using the same pattern as the selected SDK button:

```tsx
<div className="flex h-4 w-4 items-center justify-center rounded-full bg-foreground text-background">
  {React.createElement(sdk.icon, { className: "h-3 w-3" })}
</div>
```

### Visual Consistency

- Icon container: `h-4 w-4` (smaller than selected button's `h-6 w-6`)
- Icon size: `h-3 w-3` (matches selected button)
- Container styling: `rounded-full bg-foreground text-background`
- Layout: Flexbox with `items-center justify-center`

## Data Models

No data model changes required. The `sdks` array already contains the icon references.

## Error Handling

No error handling required. All icons are statically imported from `lucide-react` and guaranteed to exist.

## Testing Strategy

### Visual Testing
1. Verify each SDK icon appears in the dropdown menu
2. Verify icon sizing matches the selected SDK button
3. Verify circular container styling is consistent
4. Verify layout alignment with SDK name and checkmark
5. Test hover states don't break icon display

### Functional Testing
1. Verify clicking an SDK item still updates the selection
2. Verify checkmark appears next to the selected SDK
3. Verify dropdown closes after selection

## Design Decisions

### Decision 1: Icon Size in Dropdown
**Choice:** Use `h-4 w-4` container with `h-3 w-3` icon
**Rationale:** 
- Smaller than selected button (`h-6 w-6`) to fit dropdown density
- Maintains icon clarity at smaller size
- Consistent with dropdown item height

### Decision 2: Reuse Existing Pattern
**Choice:** Use `React.createElement()` pattern from selected button
**Rationale:**
- Maintains code consistency
- Already proven to work
- No need to destructure or create separate variables

## Implementation Notes

1. The icon rendering should be added inside the existing empty `div` container
2. The `Icon` variable declaration can be removed as it's unused
3. The fix addresses the existing TypeScript warning about unused `Icon` variable
4. No changes to the `sdks` array or icon imports are needed
