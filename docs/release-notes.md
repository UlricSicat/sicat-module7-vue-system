# Release Notes

## Version 1.1.0

### Type
Perfective Maintenance

### Added
- Active/Inactive task filter

### Preserved
- Create task
- Display tasks
- Edit task
- Delete task
- Search
- Validation
- Delete confirmation
- localStorage persistence
- Responsive interface

### Testing
- 12 manual test cases completed
- Module 9 automated tests passed
- Regression tests passed
- Production build passed
- GitHub Actions passed

### Compatibility
Older localStorage records are assigned a default Active state when the new activity field is not available.

### Known Limitations
The system continues to use browser localStorage and does not yet have a centralized backend database or user authentication.