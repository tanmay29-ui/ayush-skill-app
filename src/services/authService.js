// MOCK SERVICE
// -----------------------------------------------------------------------
// No real authentication. Stores a lightweight session in localStorage
// purely for demo continuity (so a refresh doesn't lose the session).
// Later this will call a real backend auth endpoint; login()/logout()
// signatures are designed to stay stable across that swap.
// -----------------------------------------------------------------------

const SESSION_KEY = 'asi_session';

export function login(role, identifier) {
  const session = {
    role,
    identifier,
    loggedInAt: new Date().toISOString(),
  };
  try {
    localStorage.setItem(SESSION_KEY, JSON.stringify(session));
  } catch (_e) {
    /* ignore storage errors */
  }
  return session;
}

export function logout() {
  try {
    localStorage.removeItem(SESSION_KEY);
  } catch (_e) {
    /* ignore */
  }
}

export function getSession() {
  try {
    const raw = localStorage.getItem(SESSION_KEY);
    return raw ? JSON.parse(raw) : null;
  } catch (_e) {
    return null;
  }
}
