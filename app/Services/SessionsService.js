import _store from "../store.js"
import Speaker from "../Models/Speaker.js";
import Session from "../Models/Session.js";

class SessionsService {
  constructor() {
  }

  /****************SECTION ADD SESSION****************/
  addSession(sessionData) {
    // debugger;
    let session = new Session(sessionData)
    _store.State.sessions.push(session)
    _store.saveState()
  }

  /****************SECTION DELETE SESSION****************/
  deleteSession(sessionId) {
    let foundSession = _store.State.sessions.find(session => session.id == sessionId);
    _store.State.sessions = _store.State.sessions.filter(session => session.id != sessionId)
    _store.saveState()
  }

  /****************SECTION ADD SPEAKER****************/
  addSpeaker(speakerData) {
    let speaker = new Speaker(speakerData)
    let foundSession = _store.State.sessions.find(session => session.id == speaker.sessionId)
    foundSession.speakers.push(speaker)
    _store.saveState()
  }
  deleteSpeaker(sessionId, speakerId) {
    let foundSession = _store.State.sessions.find(session => session.id == sessionId)
    foundSession.speakers = foundSession.speakers.filter(speaker => speaker.id != speakerId)
    _store.saveState()
  }
}

const SESSIONSERVICE = new SessionsService();

export default SESSIONSERVICE;
