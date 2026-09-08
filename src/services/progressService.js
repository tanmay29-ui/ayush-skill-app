// Persists the student's most recent skill assessment result so that it
// stays consistent across the dashboard, profile, skill gaps and roadmap
// pages, and survives page refreshes / navigation. Falls back to demo
// data (see `studentAssessment.js`) until a student actually completes
// the assessment.

const RESULT_KEY = 'ayush_assessment_result';
const IN_PROGRESS_KEY = 'ayush_assessment_in_progress';

function safeGet(storage, key) {
  try {
    return storage.getItem(key);
  } catch {
    return null;
  }
}

function safeSet(storage, key, value) {
  try {
    storage.setItem(key, value);
  } catch {
    // storage may be unavailable (private browsing, disabled, etc.) — ignore
  }
}

function safeRemove(storage, key) {
  try {
    storage.removeItem(key);
  } catch {
    // ignore
  }
}

/**
 * Saves a completed assessment result: { roleId, overallReadiness, skillScores, completedOn }
 */
export function saveAssessmentResult(result) {
  if (!result || !result.roleId || !Array.isArray(result.skillScores)) return;
  safeSet(localStorage, RESULT_KEY, JSON.stringify(result));
  clearInProgressAssessment();
}

/**
 * Returns the student's saved real assessment result, or null if they
 * haven't completed one yet in this browser.
 */
export function getSavedAssessmentResult() {
  const raw = safeGet(localStorage, RESULT_KEY);
  if (!raw) return null;
  try {
    const parsed = JSON.parse(raw);
    if (!parsed || !parsed.roleId || !Array.isArray(parsed.skillScores)) return null;
    return parsed;
  } catch {
    return null;
  }
}

/**
 * Saves in-progress quiz answers so a refresh mid-assessment doesn't
 * silently wipe the student's progress.
 */
export function saveInProgressAssessment(state) {
  safeSet(sessionStorage, IN_PROGRESS_KEY, JSON.stringify(state));
}

export function getInProgressAssessment() {
  const raw = safeGet(sessionStorage, IN_PROGRESS_KEY);
  if (!raw) return null;
  try {
    return JSON.parse(raw);
  } catch {
    return null;
  }
}

export function clearInProgressAssessment() {
  safeRemove(sessionStorage, IN_PROGRESS_KEY);
}
