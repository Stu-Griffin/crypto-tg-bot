function helpUser(id, bot) {
	bot.telegram.sendMessage(id, `Я на начальной стадии развития поэтому обратись к моему создателю, он 100% тебе поможет. \n@MaxVonRosenhof`);
}

export default helpUser;