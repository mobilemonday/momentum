var currentTab;

function hideTab(tabId) {
  console.log('hiding tab ' + tabId);
  $('.team-section#' + tabId).removeClass('show');
}

function showTab(tabId) {
  console.log('showing tab ' + tabId);
  $('.team-section#' + tabId).addClass('show');
  currentTab = tabId;
}

function changeTab(e) {
  e.preventDefault();

  var newTabId = e.target.id;

  hideTab(currentTab);
  showTab(newTabId);
}

function init() {
  $('.team-tabs').click(changeTab);
  showTab('managing-partners');
}

//$(document).ready(init);
