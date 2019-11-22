import SessionsService from "../Services/SessionsService.js";
import _store from "../store.js"

// private
function _drawSessions() {
  // get html

  let template = ''
  let sessions = _store.State.sessions
  sessions.forEach(session => template += session.template)
  document.querySelector("#sessions").innerHTML = template
}

// public
export default class SessionsController {
  constructor() {
    _drawSessions();
  }

  /****************SECTION ADD SESSION****************/
  addSession(event) {
    event.preventDefault()
    let formData = event.target //get POJO
    let newSession = {
      name: formData.name.value,
      speakers: []
    }

    SessionsService.addSession(newSession)
    formData.reset()
    _drawSessions()
  }

  /****************SECTION DELETE SESSION****************/
  deleteSession(sessionId) {
    SessionsService.deleteSession(sessionId)
    _drawSessions()
  }

  /****************SECTION ADD SPEAKER****************/
  addSpeaker(event, sessionId) {
    event.preventDefault()
    let formData = event.target

    let newSpeaker = {
      name: formData.name.value,
      topic: formData.topic.value,
      time: formData.time.value,
      sessionId
    }

    SessionsService.addSpeaker(newSpeaker)
    formData.reset()
    _drawSessions()
  }

  /****************SECTION DELETE SPEAKER****************/
  deleteSpeaker(sessionId, speakerId) {
    SessionsService.deleteSpeaker(sessionId, speakerId)
    _drawSessions()
  }
}
