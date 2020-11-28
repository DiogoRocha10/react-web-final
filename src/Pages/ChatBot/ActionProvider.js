// ActionProvider starter code
class ActionProvider {
    constructor(createChatBotMessage, setStateFunc) {
      this.createChatBotMessage = createChatBotMessage;
      this.setState = setStateFunc;
    }

    helloWorldHandler = () => {
      const message = this.createChatBotMessage("Escolha a opção desejada!")
      this.setChatbotMessage(message)
    }

    setChatbotMessage = (message) => {
      this.setState(state => ({...state, messages: [...state.messages, message]}))
    }
  }
  
  export default ActionProvider;