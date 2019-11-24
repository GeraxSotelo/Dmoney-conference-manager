import { generateId } from "../Utils.js";

export default class Speaker {
  constructor({ id = generateId(), sessionId, name, topic, time }) {
    this.id = id;
    this.sessionId = sessionId;
    this.name = name;
    this.topic = topic;
    this.time = time;
  }

  get template() {
    return `
      <dt>${this.name}</dt>
      <dd>${this.topic}</dd>
      <dd>${this.time}</dd>
      <button class="btn btn-danger" type="button" onclick="app.sessionsController.deleteSpeaker('${this.sessionId}','${this.id}')">Delete</button>
    `
  }
  // TODO add HTML template
}