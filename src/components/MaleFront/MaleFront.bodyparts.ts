// TODO заменить строки с капсом на id из базы
export enum MaleFrontHeadParts {
	Head = 'MALE_FRONT_HEAD_HEAD',
	Eyes = 'MALE_FRONT_HEAD_EYES',
	Ears = 'MALE_FRONT_HEAD_EARS',
	Nose = 'MALE_FRONT_HEAD_NOSE',
	OralCavity = 'MALE_FRONT_HEAD_ORAL_CAVITY'
}

export enum MaleFrontBodyParts {
	NeckOrThroat = 'MALE_FRONT_BODY_NECK_OR_THROAT',
	Chest = 'MALE_FRONT_BODY_CHEST',
	UpperArm = 'MALE_FRONT_BODY_UPPER_ARM',
	UpperAbdomen = 'MALE_FRONT_BODY_UPPER_ABDOMEN',
	Forearm = 'MALE_FRONT_BODY_FOREARM',
	MidAbdomen = 'MALE_FRONT_BODY_MID_ABDOMEN',
	LowerAbdomen = 'MALE_FRONT_BODY_LOWER_ABDOMEN',
	Hand = 'MALE_FRONT_BODY_HAND',
	SexualOrgans = 'MALE_FRONT_BODY_SEXUAL_ORGANS',
	Thigh = 'MALE_FRONT_BODY_THIGH',
	Knee = 'MALE_FRONT_BODY_KNEE',
	LowerLeg = 'MALE_FRONT_BODY_LOWER_LEG',
	Foot = 'MALE_FRONT_BODY_FOOT'
}

/* tslint:disable:max-line-length */
export const maleFrontHeadPaths: [MaleFrontHeadParts, string][] = [
	[MaleFrontHeadParts.Head, 'M70.441 17.651l-.416-.2a6.092 6.092 0 0 0-.79-.262l-.89-.121-.037-.565a66.016 66.016 0 0 1-.075-3.359c.005-.882.03-1.765.105-2.644.065-.747.16-1.499.373-2.22.074-.236.154-.471.234-.704.219-.634.452-1.267.762-1.861.291-.558.661-1.08 1.162-1.469.32-.249.681-.436 1.061-.574.511-.188 1.045-.292 1.582-.377l.079-.052c1.08-.698 2.246-1.266 3.443-1.736A21.897 21.897 0 0 1 82.235.169a21.556 21.556 0 0 1 2.858-.168c1.713.026 3.432.242 5.081.716 1.213.348 2.387.845 3.46 1.513a11.474 11.474 0 0 1 2.218 1.796c.915.958 1.653 2.08 2.169 3.299.201.475.37.965.497 1.466.079.308.145.621.181.938.028.25.016.5.005.752-.014.323-.033.647-.053.969-.059.947-.126 1.893-.194 2.839l-.209 2.712h-.093a6.09 6.09 0 0 0-2.18.45l-.038.019-.224-.349a7.873 7.873 0 0 0-1.283-1.225 11.174 11.174 0 0 0-2.389-1.382c-1.224-.53-2.522-.881-3.835-1.114a24.305 24.305 0 0 0-2.065-.274 32.387 32.387 0 0 0-2.625-.125h-.515c-.877.009-1.752.045-2.625.125-.692.063-1.382.152-2.067.274-1.266.225-2.519.56-3.707 1.058-.864.363-1.694.813-2.443 1.376a8.093 8.093 0 0 0-1.368 1.286l-.35.531z'],
	[MaleFrontHeadParts.Eyes, 'M77.5 15c2.484 0 4.5 1.456 4.5 3.25s-2.016 3.25-4.5 3.25-4.5-1.456-4.5-3.25S75.016 15 77.5 15zm11.25 0c2.346 0 4.25 1.456 4.25 3.25s-1.904 3.25-4.25 3.25-4.25-1.456-4.25-3.25S86.404 15 88.75 15z'],
	[MaleFrontHeadParts.Ears, 'M98.171 18.001l-.298 3.865-.032.396a3.613 3.613 0 0 1 .12.61 6.96 6.96 0 0 1 .046.824c0 .184-.005.367-.013.551-.013.248-.03.496-.048.742l-.017.158a22.855 22.855 0 0 1-.328 1.716 34.06 34.06 0 0 1-.539 2.154c-.085.295-.175.589-.284.876a2.438 2.438 0 0 1-.277.569 1.69 1.69 0 0 1-.403.384 3.06 3.06 0 0 1-.51.29 3.327 3.327 0 0 1-.371.141 3.372 3.372 0 0 1-.191.051c-.15.035-.31.06-.469.063l-.108.952a7.685 7.685 0 0 1-1.439-1.99c-.699-1.372-1.025-2.921-1.009-4.458.015-1.587.398-3.182 1.18-4.568.733-1.297 1.841-2.429 3.245-2.979.216-.085.438-.155.664-.21a5.112 5.112 0 0 1 1.081-.137zm-29.76.074l.574.082c.225.058.446.132.661.22 1.371.561 2.452 1.675 3.173 2.95.783 1.386 1.164 2.981 1.18 4.568.016 1.536-.31 3.086-1.009 4.458a7.743 7.743 0 0 1-1.239 1.784l-.097-.749-.061.003a2.406 2.406 0 0 1-.723-.114 3.174 3.174 0 0 1-.72-.325c-.229-.14-.456-.317-.602-.546a3.257 3.257 0 0 1-.295-.67 17.65 17.65 0 0 1-.342-1.128 38.729 38.729 0 0 1-.714-3.206 4.663 4.663 0 0 1-.06-.454c-.019-.277-.039-.554-.05-.831a9.72 9.72 0 0 1 .015-1.017 6.056 6.056 0 0 1 .068-.528c.073-.385.212-.791.485-1.078-.026-.257-.048-.515-.07-.772l-.174-2.647z'],
	[MaleFrontHeadParts.Nose, 'M83.259 19.144c1.557-.02 1.97 1.742 2 1.957l1 4.493a2.042 2.042 0 0 1-.139.755 1.983 1.983 0 0 1-.261.457 1.689 1.689 0 0 1-1.305.676c-.879.012-1.758.034-2.635-.001a1.716 1.716 0 0 1-.389-.069 1.75 1.75 0 0 1-.872-.606 1.944 1.944 0 0 1-.4-1.227c.257-1.58.731-2.9 1.001-4.478.061-.307.442-1.938 2-1.957z'],
	[MaleFrontHeadParts.OralCavity, 'M74.117 30.178l.157.24.022-.014c.445-.283.915-.527 1.393-.752a17.735 17.735 0 0 1 1.913-.765 17.499 17.499 0 0 1 4.731-.898 16.276 16.276 0 0 1 3.765.26c1.126.213 2.229.547 3.287.987a18.545 18.545 0 0 1 2.36 1.194l.142-.241.186.527c.534 1.076 1.281 2.066 2.239 2.831l-.085.758-.169.226-.014-.142a2.503 2.503 0 0 1-.007.151l-.003.023c-.786 1.13-1.961 1.963-3.22 2.54-.383.175-.775.329-1.174.464-.514.174-1.038.317-1.568.435-.611.136-1.23.238-1.851.314-.802.098-1.61.152-2.417.174-.954.025-1.91.008-2.862-.056-1.245-.084-2.489-.251-3.698-.56-.428-.11-.852-.238-1.268-.389a11.006 11.006 0 0 1-.94-.39 9.007 9.007 0 0 1-.795-.422 7.954 7.954 0 0 1-.576-.38 7.035 7.035 0 0 1-.488-.388c-.436-.382-.823-.826-1.097-1.339l-.036-.177v.008l-.136-1.052c.847-.708 1.525-1.632 2.019-2.629l.19-.538z']
];

export const maleFrontBodyPaths: [MaleFrontBodyParts, string][] = [
	[MaleFrontBodyParts.NeckOrThroat, 'M93.499 36.583l-.095.641c-.26 1.834-.509 3.671-.692 5.514a37.075 37.075 0 0 0-.147 1.825c-.011.231-.02.463-.019.695 0 .154.003.309.02.464a.505.505 0 0 0 .012.053c.034.098.081.189.133.277.072.123.153.241.238.355.26.352.553.678.853.996.46.485.944.947 1.437 1.397.537.488 1.086.961 1.646 1.422l2.309 1.784a38.184 38.184 0 0 1-5.444 1.84 39.964 39.964 0 0 1-9.483 1.236c-3.641.04-7.284-.395-10.826-1.237a46.702 46.702 0 0 1-5.191-1.555l-1.119-.474.485-.353a48.993 48.993 0 0 0 2.496-2.075 34.618 34.618 0 0 0 1.48-1.387c.34-.339.672-.686.986-1.05.214-.249.421-.504.601-.778.057-.086.11-.174.157-.265a.946.946 0 0 0 .082-.204c.008-.032.01-.067.012-.1.008-.096.011-.192.013-.288.005-.219 0-.44-.007-.659-.021-.66-.071-1.32-.125-1.979l-.638-5.917c.421.378.908.701 1.415.975.353.192.717.361 1.089.513.476.194.964.357 1.459.497 1.301.365 2.645.565 3.991.668a31.4 31.4 0 0 0 3.203.075 26.368 26.368 0 0 0 2.512-.18 20.232 20.232 0 0 0 2.146-.376c.613-.144 1.218-.32 1.808-.537 1.164-.427 2.286-1.021 3.203-1.813z'],
	[MaleFrontBodyParts.Chest, 'M55.469 83.872l.201-4.26c.159-2.794.346-5.587.577-8.376.209-2.52.453-5.038.765-7.548.202-1.626.431-3.25.717-4.863l.694-3.205.154.008c.159.008.318.015.478.02.64.013 1.287-.013 1.911-.168.263-.066.518-.16.769-.264.318-.132.628-.282.933-.442a24.631 24.631 0 0 0 2.312-1.396l1.168-.848 1.129.464a47.26 47.26 0 0 0 5.933 1.824c3.555.845 7.209 1.288 10.864 1.265a41.017 41.017 0 0 0 9.925-1.268c1.951-.5 3.864-1.15 5.717-1.939l.427-.203 1.844 1.233c.603.368 1.222.718 1.863 1.018.457.213.93.408 1.425.507.901.181 1.824.127 2.732.054l.94-.076 1.022 3.457c.458 2.038.733 4.116.897 6.197a59.88 59.88 0 0 1 .159 6.312c-.007.204-.015.408-.025.613v10.875c-.521.973-1.43 1.73-2.4 2.294-.354.206-.721.389-1.096.555a14.81 14.81 0 0 1-1.339.51c-1.327.436-2.704.713-4.087.904a42.295 42.295 0 0 1-4.915.363 48.41 48.41 0 0 1-4.587-.102c-1.242-.092-2.483-.244-3.702-.507a17.497 17.497 0 0 1-1.256-.32 12.84 12.84 0 0 1-.924-.31c-.227-.087-.452-.18-.672-.282a8.713 8.713 0 0 1-.57-.29 6.446 6.446 0 0 1-.475-.293c-.392-.265-.761-.578-1.048-.957a2.337 2.337 0 0 1-.403-.782 2.466 2.466 0 0 1-.024-.118c-.006-.057-.003-.057-.004-.141l-.283-.626-.6.073-.114.614-.002.066v.006c-.014.14-.066.278-.125.405a2.657 2.657 0 0 1-.458.659c-.3.326-.66.596-1.037.828a9.148 9.148 0 0 1-1.613.763c-.315.116-.634.22-.956.313-.429.125-.864.232-1.302.325a25.2 25.2 0 0 1-1.544.277c-1.574.234-3.165.344-4.754.389a53.51 53.51 0 0 1-3.538-.013 37.416 37.416 0 0 1-3.491-.288 24.79 24.79 0 0 1-2.936-.559c-1.362-.352-2.711-.844-3.902-1.603a6.346 6.346 0 0 1-1.374-1.144z'],
	[MaleFrontBodyParts.UpperArm, 'M118.438 107.185l-.814-1.744c-.457-.941-.924-1.877-1.394-2.813L112 94.391V72.012l.007-.147c.041-.997.05-1.994.035-2.991a62.101 62.101 0 0 0-.123-3.111c-.156-2.389-.448-4.778-.974-7.116a25.425 25.425 0 0 0-.951-3.28l.743-.006c.605.021 1.21.088 1.805.207 2.011.399 3.86 1.367 5.532 2.529.582.404 1.146.833 1.686 1.293a18.921 18.921 0 0 1 4.437 5.522 20.998 20.998 0 0 1 1.473 3.533c.647 2.048 1.002 4.181 1.151 6.321.212 3.063.001 6.137-.426 9.173l-.02.074c.011.113.042.226.071.336.041.157.09.312.141.467.17.519.371 1.028.557 1.542a77.661 77.661 0 0 1 1.779 5.598c.318 1.164.605 2.338.84 3.521.124.626.234 1.255.323 1.888.048.336.084.674.131 1.012.02.137.042.276.066.413.091.485.21.966.363 1.436l.688 1.537-.545.411a33.88 33.88 0 0 1-8.473 4.081 30.541 30.541 0 0 1-3.245.84l-.633.09zm-82.461-6.845l.017-.046c.128-.45.228-.907.298-1.37.049-.329.081-.66.12-.99.03-.234.061-.467.094-.701a47.275 47.275 0 0 1 1.042-4.951 74.743 74.743 0 0 1 1.209-4.095c.194-.591.393-1.181.599-1.768.123-.351.253-.701.373-1.052.052-.154.1-.308.147-.461.05-.175.099-.351.129-.531.005-.029.005-.029.008-.06v-.001l-.021-.077a55.636 55.636 0 0 1-.357-2.793 45.986 45.986 0 0 1-.164-2.134 41.233 41.233 0 0 1-.057-1.793c-.033-3.501.407-7.05 1.68-10.329.169-.436.352-.866.552-1.289.305-.65.645-1.284 1.02-1.897a18.616 18.616 0 0 1 1.812-2.478 19.054 19.054 0 0 1 2.042-2.026 21.792 21.792 0 0 1 1.677-1.292c1.428-.996 2.981-1.846 4.665-2.312a11.532 11.532 0 0 1 3.082-.405l1.44.076-.017.057a51.035 51.035 0 0 0-.695 3.443c-.149.874-.283 1.75-.406 2.628a153.186 153.186 0 0 0-.785 6.858 272.913 272.913 0 0 0-.619 7.876c-.411 6.299-.664 12.609-.816 18.921l-.586 1.223a1002.303 1002.303 0 0 0-3.618 7.634l-.894 1.934-.699-.082a34.627 34.627 0 0 1-2.938-.607c-1.893-.481-3.754-1.141-5.472-2.078-1.141-.622-2.22-1.37-3.158-2.272l-.704-.76z'],
	[MaleFrontBodyParts.UpperAbdomen, 'M111 84.53V96h.169l-.489 1.892c-.378 1.409-.768 2.813-1.149 4.221-.495 1.858-.969 3.729-1.276 5.887H58.22c-.257-1.982-.752-3.942-1.271-5.888-.323-1.2-.655-2.398-.981-3.598-.256-.95-.508-1.901-.744-2.857l-.157-.659.197-6.767.143-3.041c.651.559 1.417 1.014 2.207 1.384.251.117.505.227.762.329.276.11.555.211.837.306 1.308.438 2.665.723 4.03.918 1.67.239 3.359.344 5.045.369 1.109.016 2.218 0 3.326-.05a39.49 39.49 0 0 0 3.778-.335 24.815 24.815 0 0 0 2.539-.485 15.111 15.111 0 0 0 2.197-.716c.951-.4 1.874-.931 2.573-1.703.047-.053.092-.107.137-.161.054-.068.106-.137.156-.208l.023.034c.61.877 1.52 1.494 2.471 1.95.195.093.393.18.593.261.219.089.441.172.665.249.297.101.597.193.9.276.396.109.796.204 1.199.287.524.109 1.053.198 1.583.271.607.085 1.217.15 1.828.199.789.064 1.58.102 2.371.121.987.024 1.974.021 2.96-.007a43.906 43.906 0 0 0 3.988-.28c1.581-.189 3.157-.477 4.678-.955a15.882 15.882 0 0 0 1.839-.7c.177-.082.353-.167.526-.257.872-.451 1.706-1.021 2.382-1.757z'],
	[MaleFrontBodyParts.Forearm, 'M35.594 101.399l.291.321c1.025 1.009 2.214 1.842 3.475 2.53 1.791.977 3.731 1.668 5.705 2.169a35.38 35.38 0 0 0 3.023.625l.438.051-.552 1.267a32.287 32.287 0 0 0-1.47 4.668l-.031.138-.021.096c-.039.294-.079.588-.122.882-.172 1.155-.377 2.31-.796 3.405-.313.821-.735 1.593-1.17 2.355-.434.758-.88 1.509-1.319 2.264-.29.503-.58 1.008-.867 1.513-.285.506-.566 1.014-.848 1.521-.125.222-.252.442-.379.664-1.198 2.053-2.49 4.048-3.824 6.016a234.013 234.013 0 0 1-4.788 6.767c-1.111 1.521-2.241 3.028-3.355 4.547-.182.252-.361.506-.545.756-.306.409-.624.809-.932 1.218a11.35 11.35 0 0 0-1.238 2.053c-.394.851-.68 1.749-.902 2.659l-.054.31-.837-.1c-2.807-.495-5.546-1.482-7.933-3.056a14.013 14.013 0 0 1-1.659-1.266l.57-.95c1.926-3.243 3.774-6.538 5.342-9.971a54.565 54.565 0 0 0 1.61-3.885 36.739 36.739 0 0 0 1.13-3.592c.187-.735.346-1.478.467-2.227.077-.484.133-.971.203-1.457a34.97 34.97 0 0 1 1.156-5.133 33.135 33.135 0 0 1 5.133-10.082c.224-.298.452-.594.683-.887.206-.263.417-.523.621-.789l.191-.257c.204-.26.424-.506.645-.751l.471-.528c.142-.164.284-.328.423-.494a14.99 14.99 0 0 0 1.302-1.814 9.692 9.692 0 0 0 .763-1.556zm96.214 1.26c.437.732.962 1.402 1.522 2.041.351.394.711.779 1.061 1.174.079.094.159.187.236.285.064.08.123.164.187.244l.187.222c.344.389.694.772 1.036 1.163a32.042 32.042 0 0 1 2.803 3.707 30.154 30.154 0 0 1 3.078 6.318c.422 1.205.77 2.436 1.045 3.683.14.635.256 1.274.366 1.914.044.242.044.241.091.481.084.41.174.819.274 1.226a40.66 40.66 0 0 0 1.266 4.107 65.684 65.684 0 0 0 1.595 3.959c1.366 3.11 2.923 6.135 4.554 9.114l1.489 2.661a30.18 30.18 0 0 1-7.78 3.83l-2.635.701a16.651 16.651 0 0 0-1.163-2.881 19.073 19.073 0 0 0-1.092-1.835c-.376-.563-.775-1.108-1.161-1.664-.135-.198-.263-.399-.399-.596-.48-.679-1.007-1.324-1.528-1.972-.66-.819-1.323-1.635-1.983-2.455-.384-.479-.769-.96-1.151-1.442-2.269-2.876-4.468-5.815-6.419-8.918a49.443 49.443 0 0 1-1.514-2.571c-.352-.642-.686-1.294-1.031-1.939-.191-.353-.384-.705-.578-1.058-.582-1.047-1.182-2.085-1.772-3.129-.111-.2-.221-.399-.33-.6a19.644 19.644 0 0 1-.496-.983c-.19-.41-.358-.832-.501-1.261-.371-1.122-.561-2.292-.723-3.459l-.027-.206a32.365 32.365 0 0 0-.751-2.438l-.749-1.937 3.128-.731a34.69 34.69 0 0 0 9.184-4.265l.681-.49z'],
	[MaleFrontBodyParts.MidAbdomen, 'M108.096 109l-.156.978a24.724 24.724 0 0 0-.116 2.494c.006.748.049 1.496.094 2.242a86.75 86.75 0 0 0 .728 7.183c.077.529.161 1.056.252 1.582.074.432.153.861.246 1.289.031.145.068.288.102.432.016.081.016.08.029.163.065.452.091.91.116 1.366.034.598.057 1.195.076 1.793.059 1.791.088 3.582.108 5.373l.003.306.258 1.409-3.246.477c-2.9.389-5.805.737-8.716 1.032-2.61.264-5.224.488-7.843.647-2.341.141-4.686.234-7.031.234-2.137 0-4.274-.077-6.407-.196a194.55 194.55 0 0 1-7.965-.621 283.67 283.67 0 0 1-8.48-.959l-3.582-.507.152-.7.185-.829a335 335 0 0 1 .067-4.074c.022-.904.046-1.809.086-2.713.018-.419.04-.84.07-1.259.019-.26.04-.521.079-.779.031-.201.087-.397.132-.595.039-.185.076-.37.113-.555a62.18 62.18 0 0 0 .542-3.46 87.047 87.047 0 0 0 .602-6.594c.033-.609.062-1.217.062-1.827 0-.693-.032-1.387-.091-2.078L58.373 109h49.723z'],
	[MaleFrontBodyParts.LowerAbdomen, 'M110.016 136.591l1.177 6.438.051.256c-2.979.37-5.914 1.13-8.617 2.428a21.89 21.89 0 0 0-3.244 1.908 20.7 20.7 0 0 0-4.524 4.404c-2.053 2.719-3.424 5.908-4.164 9.23-.772-1.058-1.706-1.939-2.801-2.592a8.52 8.52 0 0 0-.935-.483 8.068 8.068 0 0 0-1.213-.423 8.082 8.082 0 0 0-1.875-.256h-.242a8.082 8.082 0 0 0-1.875.256c-.414.108-.82.25-1.213.423a8.52 8.52 0 0 0-.935.483c-1.564.933-2.799 2.329-3.665 3.953l-.293-1.07c-1.246-3.765-3.172-7.353-5.893-10.261-.421-.45-.861-.884-1.319-1.298-.663-.6-1.364-1.16-2.098-1.673a21.295 21.295 0 0 0-3.35-1.911c-2.005-.913-4.145-1.51-6.322-1.83l-1.991-.153 1.678-7.724 3.668.52c2.832.362 5.669.686 8.51.962 2.664.258 5.333.475 8.006.624 2.152.12 4.308.198 6.463.198 2.145 0 4.289-.077 6.43-.198 2.423-.136 4.842-.33 7.257-.561 2.641-.253 5.278-.552 7.911-.885l5.418-.765z'],
	[MaleFrontBodyParts.Hand, 'M14.388 146.596l1.479 1.194c2.463 1.652 5.292 2.706 8.199 3.246l1.075.133-.325 1.849c-.066.541-.116 1.084-.175 1.626l-.075.65c-.267 2.119-.646 4.224-1.197 6.289a32.84 32.84 0 0 1-.615 2.051 21.042 21.042 0 0 1-.644 1.691l-.07.145a29.264 29.264 0 0 0-.639 1.672c-.05.147-.098.295-.141.443-.02.072-.044.147-.058.221-.019.12-.022.243-.027.363-.007.185-.01.371-.012.556-.005.519.001 1.037.006 1.555.021 1.49.056 2.98.076 4.471.004.396.008.791.006 1.186-.002.288 0 .581-.029.87a3.919 3.919 0 0 1-.095.524c-.047.187-.11.372-.2.544a1.467 1.467 0 0 1-.396.485c-.142.111-.306.19-.48.24a1.583 1.583 0 0 1-.484.064 1.074 1.074 0 0 1-.219-.034c-.424-.112-.726-.473-.935-.84a3.552 3.552 0 0 1-.195-.404l-.026-.066c-.015-.043-.03-.08-.04-.126-.006-.026-.007-.051-.01-.076l-.378-7.678a3.853 3.853 0 0 0-.012-.415 2.262 2.262 0 0 0-.066-.385.856.856 0 0 0-.084-.208.582.582 0 0 0-.054.079c-.127.219-.193.468-.246.713l-.012.061c-.02.119-.031.239-.047.357-.02.146-.027.187-.048.333-.035.227-.072.455-.111.681-.503 2.827-1.317 5.586-2.123 8.338-.055.191-.11.382-.167.574-.05.165-.102.331-.159.494-.042.12-.086.24-.135.357-.174.426-.4.861-.775 1.143a1.532 1.532 0 0 1-.622.276 2.3 2.3 0 0 1-.543.034 2.507 2.507 0 0 1-.275-.023 1.108 1.108 0 0 1-.36-.124 1.219 1.219 0 0 1-.467-.493 2.181 2.181 0 0 1-.223-.792 5.153 5.153 0 0 1 .026-1.197l.005-.032 1.664-9.862c.034-.135.079-.269.116-.403.032-.123.061-.247.085-.371l.002-.011a7.647 7.647 0 0 0-.382.633c-.145.264-.281.535-.41.808a34.488 34.488 0 0 0-.855 1.975 88.333 88.333 0 0 0-1.68 4.616c-.143.424-.284.847-.425 1.272-.096.292-.19.586-.291.877-.032.09-.067.18-.103.268a3.346 3.346 0 0 1-.526.876 2.22 2.22 0 0 1-.57.474 2.382 2.382 0 0 1-1.251.295 2.4 2.4 0 0 1-.478-.048 1.13 1.13 0 0 1-.615-.381c-.283-.338-.361-.802-.368-1.232a4.482 4.482 0 0 1 .031-.571c.014-.131.036-.261.061-.391l.005-.026c.144-.556.338-1.098.509-1.646a3638.822 3638.822 0 0 1 2.205-7.083c.17-.544.339-1.09.516-1.633.017-.051.018-.051.038-.099.057-.117.11-.237.164-.355l.063-.15.031-.074c-.103.125-.201.252-.298.382-.47.625-.908 1.274-1.336 1.929a110.062 110.062 0 0 0-1.78 2.856c-.259.446-.509.896-.756 1.349-.015.029-.023.061-.035.092l-.059.138-.127.273c-.197.387-.421.764-.718 1.084-.18.192-.386.362-.623.478-.195.096-.41.152-.628.153a1.493 1.493 0 0 1-.774-.222 1.461 1.461 0 0 1-.391-.335c-.2-.252-.3-.565-.334-.882a3.313 3.313 0 0 1 .022-.79c.05-.363.14-.719.248-1.069.22-.717.515-1.41.824-2.093.183-.404.375-.804.555-1.208.064-.148.122-.298.185-.446.334-.756.723-1.488 1.116-2.215a45.43 45.43 0 0 1 1.287-2.248c.097-.157.2-.31.3-.464.022-.039.041-.077.061-.117.116-.257.201-.527.281-.798.089-.302.167-.608.24-.914.193-.81.351-1.629.475-2.452-.157.193-.311.39-.467.586-.449.576-.892 1.159-1.349 1.732l-.192.231c-.253.277-.58.474-.922.621-.743.319-1.606.421-2.39.2a2.895 2.895 0 0 1-.51-.198 1.79 1.79 0 0 1-.31-.193 1.074 1.074 0 0 1-.396-.78c-.016-.356.128-.698.305-1 .157-.264.345-.51.542-.745.264-.313.547-.608.834-.899.223-.225.449-.447.669-.673.072-.077.144-.153.212-.233.181-.222.311-.479.436-.737.181-.384.346-.776.524-1.162.255-.541.54-1.074.936-1.526a4.48 4.48 0 0 1 .516-.487 11.9 11.9 0 0 1 .619-.48 40.722 40.722 0 0 1 1.962-1.332 86.388 86.388 0 0 1 1.577-.987l.5-.304c.067-.04.133-.081.202-.121.103-.057.213-.105.32-.155.199-.091.4-.174.604-.251a8.26 8.26 0 0 1 1.595-.423 5.18 5.18 0 0 1 .173-.361c.241-.47.511-.924.78-1.379l1.081-1.798zm138.702-.759l1.022 1.825c.135.242.268.486.4.73.105.199.211.397.311.598.067.134.133.271.193.409.119.026.239.052.358.082a8.954 8.954 0 0 1 1.804.683c.235.14.468.282.702.423a65.61 65.61 0 0 1 2.92 1.88c.336.232.668.469.99.72.31.242.611.495.86.801.595.73.928 1.624 1.315 2.47.048.102.097.204.148.304.087.164.177.329.29.478.078.104.17.197.259.292.263.27.532.535.797.804.264.272.526.548.767.842.174.213.34.434.481.673.177.3.321.644.304 1a1.062 1.062 0 0 1-.396.779 1.651 1.651 0 0 1-.31.192 2.845 2.845 0 0 1-.583.218c-.725.185-1.508.099-2.2-.172a3.036 3.036 0 0 1-.85-.488c-.144-.121-.261-.267-.38-.412-.457-.571-.899-1.155-1.349-1.731l-.035-.043a36.91 36.91 0 0 0 .878 2.325c.141.339.287.68.464 1.004.048.09.105.173.161.257.06.09.084.13.144.223.115.185.228.372.341.56.39.661.765 1.331 1.128 2.007a34.2 34.2 0 0 1 .889 1.75c.061.132.121.264.176.398.044.107.086.215.132.321.181.404.371.805.556 1.208.237.53.468 1.063.663 1.609.126.355.239.715.322 1.083.112.494.183 1.03.062 1.532-.053.22-.147.43-.288.608a1.415 1.415 0 0 1-.391.336c-.26.155-.56.24-.865.218a1.539 1.539 0 0 1-.68-.227 2.584 2.584 0 0 1-.673-.629 5.524 5.524 0 0 1-.746-1.357c-.021-.056-.058-.107-.086-.159-.039-.069-.076-.139-.113-.208-.146-.263-.151-.271-.304-.543-.11-.194-.22-.388-.334-.579-.134-.226-.273-.449-.411-.672a98.037 98.037 0 0 0-.982-1.57c-.308-.48-.62-.957-.942-1.427a22.532 22.532 0 0 0-.982-1.339l-.015-.019c.082.202.171.4.266.596.065.168.126.337.188.506 1.006 2.755 2.004 5.512 3.004 8.269l.58 1.601c.045.158.067.322.086.485a4.98 4.98 0 0 1 .031.572c-.007.452-.095.943-.415 1.283a1.091 1.091 0 0 1-.353.255 1.291 1.291 0 0 1-.366.1c-.111.01-.11.01-.221.017a2.837 2.837 0 0 1-.801-.068 2.163 2.163 0 0 1-.744-.344c-.501-.366-.802-.924-1.01-1.497-.165-.48-.33-.96-.5-1.44-.673-1.894-1.376-3.78-2.181-5.622a28.854 28.854 0 0 0-.884-1.864c-.238-.455-.491-.912-.815-1.313l-.003-.005c.041.173.09.344.135.516l.031.13c.793 3.523 1.537 7.058 2.304 10.586.014.096.025.192.034.289.032.373.037.751-.026 1.121a1.96 1.96 0 0 1-.231.679c-.146.247-.37.441-.645.525a1.92 1.92 0 0 1-.523.061 2.032 2.032 0 0 1-.544-.06 1.513 1.513 0 0 1-.565-.287c-.367-.298-.591-.744-.759-1.177a8.74 8.74 0 0 1-.161-.445 16.143 16.143 0 0 1-.16-.516c-.06-.209-.122-.416-.186-.622-.276-.895-.56-1.787-.836-2.682a79.31 79.31 0 0 1-1.165-4.116c-.26-1.047-.491-2.103-.624-3.174a1.565 1.565 0 0 0-.065-.145 1.145 1.145 0 0 0-.224-.315l-.009-.008-.005-.005c-.014.065-.023.13-.033.195-.03.262-.037.526-.029.789l-.118 7.794c-.003.027-.003.056-.008.084-.018.097-.064.193-.103.283a3.515 3.515 0 0 1-.127.262c-.21.39-.521.783-.969.901-.071.019-.145.03-.219.034a1.599 1.599 0 0 1-.901-.258 1.398 1.398 0 0 1-.379-.395 2.217 2.217 0 0 1-.278-.681c-.093-.376-.121-.76-.146-1.145-.025-.38-.046-.76-.067-1.139-.081-1.549-.152-3.099-.232-4.646-.025-.473-.052-.945-.08-1.417-.03-.475-.057-.951-.11-1.423a3.664 3.664 0 0 0-.021-.146 3.019 3.019 0 0 0-.118-.386 11.233 11.233 0 0 0-.191-.489 25.367 25.367 0 0 0-.677-1.472c-.029-.058-.059-.118-.091-.176a5.435 5.435 0 0 1-.105-.183c-.057-.105-.056-.105-.111-.211-.559-1.111-.972-2.294-1.312-3.488a35.214 35.214 0 0 1-1.022-5.056 42.063 42.063 0 0 1-.151-1.279c-.031-.309-.061-.619-.097-.929a33.895 33.895 0 0 0-.095-.713l-.451-2.063 2.237-.546c3-.92 5.861-2.293 8.444-4.054z'],
	[MaleFrontBodyParts.SexualOrgans, 'M82.097 178.284l-.869-.261a7.41 7.41 0 0 1-.748-.342c-1.716-.902-3.038-2.438-3.869-4.172-.746-1.557-1.111-3.285-1.111-5.009 0-1.762.381-3.53 1.162-5.113.848-1.722 2.185-3.239 3.91-4.116.275-.139.558-.262.848-.365a6.948 6.948 0 0 1 2.225-.405h.21a6.948 6.948 0 0 1 2.225.405c.29.103.573.226.848.365 1.725.877 3.062 2.394 3.91 4.116.781 1.583 1.162 3.351 1.162 5.113 0 1.724-.365 3.452-1.111 5.009-.831 1.734-2.153 3.27-3.869 4.172a7.124 7.124 0 0 1-1.827.666l-.441.047-.089-.593a64.078 64.078 0 0 1-.386-3.152 23.848 23.848 0 0 1-.078-1.068 7.434 7.434 0 0 1-.007-.804l-.001.015-.248-4.552h-.79l-.024.407a107.793 107.793 0 0 1-.768 7.98l-.264 1.657z'],
	[MaleFrontBodyParts.Thigh, 'M54.462 145.401c1.745.061 3.483.344 5.169.829a20.803 20.803 0 0 1 5.024 2.182 20.154 20.154 0 0 1 3.883 3.052c2.939 2.944 4.972 6.701 6.24 10.639l.54 1.934-.144.334a12.539 12.539 0 0 0-.511 2.063c-.509 3.184.167 6.597 2.066 9.229.262.362.547.708.853 1.034.408.435.855.834 1.338 1.186a8.668 8.668 0 0 0 1.837 1.028l1.183.354-.183 1.15c-.402 2.208-.901 4.396-1.434 6.575a378.692 378.692 0 0 1-1.221 4.828c-.606 2.342-1.223 4.682-1.83 7.024-.27 1.062-.528 2.126-.773 3.194a152.9 152.9 0 0 0-1.681 8.512l-1.178 8.09c-2.778-2.231-6.127-3.671-9.569-4.558a35.272 35.272 0 0 0-1.9-.434c-.7-.141-1.404-.261-2.111-.364a43.064 43.064 0 0 0-2.73-.304 47.377 47.377 0 0 0-4.16-.143l-.455.02.004-2.341a54.546 54.546 0 0 0-.15-3.454c-.04-.494-.098-.986-.154-1.479-.166-1.415-.343-2.828-.512-4.243a264.138 264.138 0 0 1-.654-6.156 235.162 235.162 0 0 1-.666-9.151 282.026 282.026 0 0 1-.161-3.436c-.036-.911-.07-1.821-.086-2.733a89.552 89.552 0 0 1 .001-3.278c.058-3.229.28-6.453.627-9.663.211-1.964.474-3.921.764-5.874.186-1.225.385-2.45.568-3.677.042-.285.084-.571.116-.858.016-.148.033-.297.033-.447-.001-.039-.005-.08-.007-.119v-.128c.022-.415.094-.828.163-1.239.084-.51.178-1.02.274-1.528.292-1.544.608-3.084.93-4.622l.657-3.028zm56.981-1.117l.442 2.222c.23 1.105.465 2.208.729 3.305.128.535.272 1.067.411 1.601.066.259.131.517.194.775.423 1.768.798 3.548 1.158 5.329a292.3 292.3 0 0 1 1.176 6.164c.361 1.998.702 3.998 1.01 6.005.112.736.22 1.472.318 2.21.094.703.181 1.408.248 2.114.061.651.095 1.304.132 1.957.046.821.086 1.642.12 2.464a202 202 0 0 1 .171 7.784c.009 3.194-.048 6.389-.174 9.581a177.761 177.761 0 0 1-.435 7.476c-.037.451-.076.903-.12 1.354-.034.359-.073.717-.108 1.075a32 32 0 0 0-.051.629c-.134 1.921-.137 3.851-.076 5.776l.008.126-1.087-.226a27.306 27.306 0 0 0-4.675-.372 26.274 26.274 0 0 0-4.924.522 27.23 27.23 0 0 0-8.032 3.041l-2.246 1.441-.297-1.325a607.166 607.166 0 0 0-2.218-9.303 469.515 469.515 0 0 0-1.056-4.204 233.304 233.304 0 0 0-.834-3.189 107.966 107.966 0 0 0-1.099-3.778 103.733 103.733 0 0 0-1.811-5.283c-.572-1.539-1.179-3.064-1.767-4.598-.126-.334-.25-.669-.373-1.005a33.746 33.746 0 0 1-.849-2.638l-.413-1.928a6.756 6.756 0 0 0 1.828-.475 8.668 8.668 0 0 0 1.837-1.028c.45-.328.869-.697 1.255-1.098.31-.322.598-.664.863-1.023 1.955-2.643 2.654-6.104 2.139-9.328-.112-.7-.282-1.391-.511-2.063a10.41 10.41 0 0 0-.853-1.891l.116-.739c.786-3.6 2.321-7.065 4.696-9.903a19.671 19.671 0 0 1 2.354-2.371 20.494 20.494 0 0 1 4.232-2.761c2.689-1.323 5.623-2.08 8.572-2.422z'],
	[MaleFrontBodyParts.Knee, 'M52.713 213.848l.134-.008a45.145 45.145 0 0 1 3.945.1 42.68 42.68 0 0 1 2.624.263 38.027 38.027 0 0 1 4.14.778c3.443.858 6.802 2.272 9.597 4.491l.355.322-.094.835c-.018.168-.037.336-.052.505-.016.19-.031.38-.05.569-.023.195-.048.388-.075.581-.255 1.708-.739 3.371-1.299 5-.614 1.786-1.318 3.54-1.997 5.302-.15.396-.3.791-.447 1.187a58.83 58.83 0 0 0-.582 1.636c-.14.416-.279.834-.399 1.256l-.089.356c-2.581.001-5.155-.16-7.698-.549a35.573 35.573 0 0 1-3.769-.776 25.28 25.28 0 0 1-3.363-1.136 17.91 17.91 0 0 1-2.436-1.246l-.566-.421.606-2.106c.292-1.352.49-2.72.668-4.09.103-.814.201-1.629.304-2.443.036-.284.077-.568.111-.852.134-1.182.204-2.373.265-3.561.084-1.635.136-3.27.165-4.906l.002-1.087zm43.157 3.853l2.677-1.735a26.367 26.367 0 0 1 6.772-2.657 24.962 24.962 0 0 1 6.61-.663c1.373.046 2.742.205 4.091.468l.644.153.285 4.325c.063.612.145 1.221.226 1.831.099.745.196 1.491.297 2.236.258 1.904.538 3.808.892 5.697.151.8.314 1.598.506 2.389.149.61.312 1.219.515 1.813l.022.061-1.034.637c-.275.138-.555.267-.837.391-.435.19-.878.365-1.325.526-1.081.392-2.19.708-3.309.973a44.167 44.167 0 0 1-3.641.696 59.457 59.457 0 0 1-4.058.46l-3.118.141-.072-.156c-.616-1.284-1.276-2.547-1.921-3.818-.19-.377-.379-.754-.566-1.132-.619-1.268-1.21-2.55-1.682-3.881a17.382 17.382 0 0 1-.778-2.878 13.208 13.208 0 0 1-.149-1.157l-.006-.078-1.041-4.642z'],
	[MaleFrontBodyParts.LowerLeg, 'M125.812 290h-11.284l.075-1.128a18.807 18.807 0 0 0-.109-1.76 33.43 33.43 0 0 0-.354-2.461 51.08 51.08 0 0 0-.546-2.652 81.392 81.392 0 0 0-1.691-6.097c-.482-1.528-.985-3.049-1.606-4.527a39.735 39.735 0 0 0-1.24-2.654c-.469-.92-.966-1.827-1.447-2.741l-.283-.546a35.13 35.13 0 0 1-1.022-2.17 27.759 27.759 0 0 1-.991-2.723c-.518-1.696-.881-3.438-1.156-5.189-.329-2.094-.53-4.205-.678-6.318l.005-.114c.026-.168.049-.336.071-.506.03-.229.03-.229.057-.458.225-2.01.314-4.04.177-6.059a21.143 21.143 0 0 0-.293-2.394 13.803 13.803 0 0 0-.484-1.902l-.468-1.158.79-.019a63.63 63.63 0 0 0 4.634-.397 48.74 48.74 0 0 0 4.665-.793 32.115 32.115 0 0 0 3.918-1.12c.39-.141.777-.292 1.159-.454.732-.31 1.451-.661 2.097-1.07l.22.488c.222.469.45.937.671 1.408a44.91 44.91 0 0 1 1.359 3.175c.454 1.189.85 2.399 1.191 3.625.901 3.234 1.424 6.567 1.685 9.911.272 3.483.261 6.985.06 10.472a103.37 103.37 0 0 1-.257 3.425c0 .807.002 1.615.006 2.424.024 4.374.082 8.75.246 13.122.06 1.586.134 3.173.246 4.756.046.656.1 1.311.166 1.966.06.602.134 1.203.24 1.8l.171.838zm-66.764 0H47.972l.038-.185c.021-.119.041-.239.058-.359.092-.694.13-1.393.15-2.092.019-.617.022-1.236.015-1.854a115.45 115.45 0 0 0-.206-5.39 241.084 241.084 0 0 0-.501-6.738c-.223-2.576-.477-5.15-.757-7.72l-.025-.229c-.411-4.537-.637-9.1-.456-13.655a62.65 62.65 0 0 1 .427-5.335c.214-1.704.509-3.399.916-5.067a34.865 34.865 0 0 1 1.874-5.594c.196-.461.399-.918.594-1.378l.189-.466 2.523 1.372c1.089.486 2.218.881 3.364 1.208 1.337.382 2.7.67 4.072.891 2.637.425 5.31.604 7.956.604l-.378 2.403a36.487 36.487 0 0 0-.183 2.881 44.62 44.62 0 0 0 .127 4.706l.002.059c-.072 2.704-.185 5.409-.451 8.102a49.904 49.904 0 0 1-.418 3.249 27.916 27.916 0 0 1-.755 3.371c-.269.905-.602 1.79-.99 2.651-.465 1.032-1.003 2.03-1.511 3.042l-.258.523a38.13 38.13 0 0 0-1.071 2.422c-.332.834-.63 1.68-.908 2.533-.22.676-.428 1.357-.623 2.041a50.528 50.528 0 0 0-1.54 7.373 35.57 35.57 0 0 0-.314 4.623c.002.537.019 1.074.061 1.61l.055.398z'],
	[MaleFrontBodyParts.Foot, 'M59.185 291l.004.023c.049.208.107.413.161.621.08.304.158.608.235.912.267 1.074.527 2.155.696 3.248.057.36.105.724.115 1.088.005.216 0 .441-.066.648a.885.885 0 0 1-.059.147c-.025.048-.056.093-.081.142a3.198 3.198 0 0 0-.062.146 13.53 13.53 0 0 0-.412 1.295 52.98 52.98 0 0 0-.456 1.763l.034.303c.155 1.57.22 3.158-.045 4.721a15.53 15.53 0 0 1-.189.927c-.031.134-.076.318-.106.44a.827.827 0 0 1-.054.154 1.404 1.404 0 0 1-.173.282c-.093.113-.195.221-.283.338a1.225 1.225 0 0 0-.152.268 1.509 1.509 0 0 0-.096.528c-.006.257.027.514.077.766.019.101.042.201.067.301.039.154.082.306.13.458.056.181.118.359.175.54a8.365 8.365 0 0 1 .225.926c.12.671.145 1.367.005 2.038a3.548 3.548 0 0 1-.333.942 2.54 2.54 0 0 1-.256.395c-.045.056-.096.105-.145.157-.044.046-.051.055-.097.109a6.13 6.13 0 0 0-.189.237c-.296.403-.552.832-.785 1.273-.123.233-.236.47-.352.707-.049.094-.049.094-.1.186a3.822 3.822 0 0 1-.6.78c-.13.129-.271.247-.419.354-.696.503-1.544.739-2.391.811a7.201 7.201 0 0 1-.465.024c-.175.004-.35.004-.522-.021a2.012 2.012 0 0 1-.593-.188c-.328-.166-.6-.42-.834-.701a7.913 7.913 0 0 1-.532-.736c-.232.28-.47.556-.711.828a2.085 2.085 0 0 1-.342.272c-.357.232-.778.372-1.208.344-.493-.033-.932-.289-1.267-.644a2.682 2.682 0 0 1-.131-.149l-.022.02c-.371.327-.903.355-1.369.284a3.384 3.384 0 0 1-.611-.155.779.779 0 0 1-.23-.198 1.963 1.963 0 0 1-.275-.422c-.019-.04-.036-.081-.053-.122-.072.017-.145.03-.217.04-.168.026-.338.04-.506.05-.161.01-.323.017-.483-.006a1.07 1.07 0 0 1-.741-.431 1.336 1.336 0 0 1-.163-.293l-.014.002a.997.997 0 0 1-.197.008c-.343-.022-.634-.231-.869-.469a3.098 3.098 0 0 1-.217-.242 1.995 1.995 0 0 1-.215-.302 2.402 2.402 0 0 1-.248-.709 5.1 5.1 0 0 1-.09-1.076 9.997 9.997 0 0 1 .216-1.896c.059-.284.127-.567.212-.845.065-.212.138-.423.228-.626.117-.262.269-.508.423-.748.181-.281.372-.556.568-.829a62.215 62.215 0 0 1 1.862-2.452l.126-.159c.04-.05.08-.102.121-.15.019-.023.042-.045.062-.067a7.28 7.28 0 0 0 .375-.45c.39-.514.726-1.067 1.031-1.635.287-.533.547-1.08.791-1.633a38.105 38.105 0 0 0 1.142-2.961 16.12 16.12 0 0 1-.263-1.43 13.473 13.473 0 0 1-.113-1.946c.014-1.108.159-2.212.349-3.302l.556-2.853h11.416zm64.151 26.934l-.026.038c-.338.496-.715 1.007-1.265 1.284a1.964 1.964 0 0 1-.593.188 3.044 3.044 0 0 1-.523.021 7.17 7.17 0 0 1-.464-.024c-.936-.079-1.876-.363-2.604-.978a3.68 3.68 0 0 1-.857-1.058c-.09-.167-.167-.341-.251-.51a28.626 28.626 0 0 0-.222-.427 9.295 9.295 0 0 0-.757-1.195 4.25 4.25 0 0 0-.2-.244c-.051-.056-.106-.108-.157-.165a2.692 2.692 0 0 1-.104-.135c-.602-.877-.694-2.005-.549-3.032a8.11 8.11 0 0 1 .265-1.171c.056-.181.118-.359.175-.54.036-.115.07-.232.102-.349.094-.364.172-.737.173-1.115 0-.221-.029-.448-.124-.65-.097-.208-.265-.37-.408-.546a1.334 1.334 0 0 1-.214-.386c-.045-.161-.081-.326-.119-.49a15.338 15.338 0 0 1-.189-.926 12.248 12.248 0 0 1-.15-1.268c-.085-1.254.001-2.512.137-3.76l-.15-.614a42.444 42.444 0 0 0-.431-1.59 14.42 14.42 0 0 0-.169-.535c-.053-.154-.107-.312-.179-.46-.023-.049-.053-.095-.079-.142-.02-.04-.02-.04-.037-.079-.108-.307-.099-.639-.077-.959.032-.425.098-.847.173-1.266.184-1.028.428-2.046.685-3.057.057-.226.117-.453.175-.678l.031-.116h11.661l.178.88c.257 1.32.505 2.648.589 3.992.049.798.038 1.598-.05 2.392-.044.413-.109.825-.191 1.232-.031.16-.066.32-.103.479l-.004.02c.456 1.348.973 2.677 1.601 3.953.237.479.488.95.767 1.404.304.494.638.967 1.034 1.391.204.256.407.513.609.77a57.838 57.838 0 0 1 1.623 2.165c.185.265.367.531.538.805.11.174.214.352.302.538.081.173.147.354.207.536.088.269.16.543.221.819.159.708.257 1.439.255 2.167-.001.33-.023.66-.09.984a2.408 2.408 0 0 1-.249.708c-.061.11-.135.207-.214.303-.07.083-.141.164-.217.241-.262.264-.606.499-.995.468-.028-.003-.057-.006-.085-.011a1.295 1.295 0 0 1-.192.332 1.095 1.095 0 0 1-.713.394c-.194.027-.392.012-.586-.002a3.943 3.943 0 0 1-.621-.083 1.864 1.864 0 0 1-.245.443 1.186 1.186 0 0 1-.233.252.836.836 0 0 1-.278.113 3.895 3.895 0 0 1-.34.078c-.45.077-.963.074-1.351-.202a1.192 1.192 0 0 1-.111-.091 2.095 2.095 0 0 1-.132.149c-.334.355-.773.612-1.266.644-.43.027-.851-.113-1.208-.345a2.056 2.056 0 0 1-.322-.25l-.021-.022a35.106 35.106 0 0 1-.71-.827l-.025.039-.051.076z']
];
