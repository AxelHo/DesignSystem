/* globals questionnaireInteraction, drilldownInteraction, handleFocus,
mobileNavigation, propagateContent, toggleExpand, toggleFilter, uniformHeight,
tooltip, popover, aTagSpaceExpand, initializeDatepicker, onboarding,
nameChecker, codeLookup, handleValidatorLibrary, setupDeletableRowsTable */
window.altinnInit = function() {
  toggleExpand();
  drilldownInteraction();
  toggleFilter();
  uniformHeight();
  handleFocus();
  tooltip();
  popover();
  mobileNavigation();
  propagateContent();
  questionnaireInteraction();
  aTagSpaceExpand();
  initializeDatepicker();
  onboarding();
  nameChecker();
  codeLookup();
  handleValidatorLibrary();
  setupDeletableRowsTable();
};
window.altinnInit();
