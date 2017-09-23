$(function () {
    $('.skitter-large').skitter();
});

function ShowScroll(id) {
    var offset = 70;
    $('html, body').animate({
        scrollTop: $(id).offset().top - offset
    },1000);
    return false;
}

function BrReadMore() {
    $('#briketsmoretext').css("transition", "1s");
    $('#View1').css("visibility", "hidden");
    document.getElementById("briketsmoretext").innerHTML = ' <div class="BriketsMoveText">\n' +
        '        <h3 class="text-center">Опис продукції</h3>\n' +
        '        <p><b>Паливні брикети</b> – це біопаливо, яке застосовується в котлах, призначених для твердих видів джерела\n' +
        '            енергії. Це паливо виробляється з відновлюваних природних речовин. В ході виробництва спресовуються відходи\n' +
        '            виробництва агропромисловості. Брикети використовуються в якості палива для домашніх пічок, камінів та\n' +
        '            котлів.\n' +
        '            Паливні брикети являються екологічно чистим продуктом, який не виділяє небезпечних речовин під час горіння,\n' +
        '            при цьому характерно виділяючи невелику кількість диму. Вони чудово підходять для опалення приміщень любого\n' +
        '            типу.\n' +
        '            <img src="Images/Bri-info2.jpg"\n' +
        '                 style="width: 100%; height: 100%; max-width:300px; max-height: 180px; margin: 1%; float:right; border-left: solid 2px #3c3c3c;"/>Так\n' +
        '            як традиційні види палива є скінченними (вугілля, газ, нафтові продукти), ціни на них постійно будуть\n' +
        '            збільшуватися, адже їх кількість зменшується, а попит навпаки має тенденцію зростання. Для вирішення та\n' +
        '            пом’якшення донної проблеми людство почало шукати альтернативні та відновлювані види енергії. Одним з них\n' +
        '            являється добування енергії з відходів промисловості та народного господарства. Сучасні технології надають\n' +
        '            змогу робити екологічно чистий та енергоефективний продукт з тих речовин, якими ще десятиріччя назад\n' +
        '            нехтували. Паливні брикети надають змогу опалювати житло, виробничі приміщення, тощо не владуючи кошти в\n' +
        '            переобладнання пічок та котлів. Це чудова альтернатива для використання в котлах, пічках та камінах з малою\n' +
        '            тягою. При горінні паливні брикети не тріщать, не викидають жар та не іскрять, натомість горіння протікає\n' +
        '            плавно та довго. Викиди сульфуру (сірки (S)) становлять 0.0033%, що являється високим показником\n' +
        '            екологічності. Брикети виробляються здебільшого з відходів деревообробки, та заготовки лісу, таким чином\n' +
        '            брикети можна віднести до невичерпних видів палива.\n' +
        '            <img src="Images/Bri-info1.png"\n' +
        '                 style="width: 100%; height: 100%; max-width:300px; max-height: 180px; margin: 1%; float:left; border-right: solid 2px #3c3c3c;"/>Паливній\n' +
        '            брикети мають властивість довго горіти та тліти (приблизно 4 години). Вони безпечні – не стріляють та не\n' +
        '            мають властивості іскріння. Тепловіддача знаходиться на одному рівні з вугіллям антрацитом. По практичним\n' +
        '            спостереженням віддають тепло в декілька раз більше, ніж дрова. Виділення теплової енергії, з дослідів,\n' +
        '            мають в межах 4399 Ккал/кг до 5099 Ккал/кг, в той час як звичайні дрова виділяють всього від 2899 Ккал/кг,\n' +
        '            вугілля 4899 Ккал/кг. Після згорання брикету, золи залишаться всього 0.1% від маси брикету, в той час як\n' +
        '            після відпрацювання вугілля залишаться приблизно 30% відходів.\n' +
        '            Паливні брикети мають широке застосування в країнах Європи та Америки, протягом 19 останніх років.</p>\n' +
        '        <p style="margin-top: 40px;">\n' +
        '        <h3 class="text-center"> Основні переваги паливних брикетів</h3><br/>\n' +
        '        <ul class="DescriptionText">\n' +
        '            <li class="Title"> Економія</li>\n' +
        '            <ul>\n' +
        '                <li> 1 тонна паливних брикетів = 5 м3 дров</li>\n' +
        '                <li> 1 тонна паливних брикетів дає більше тепла, ніж 5 м3 (самоскид) звичайних березових дров природної\n' +
        '                    вологості.\n' +
        '                </li>\n' +
        '                <li> По тепловіддачі на одиницю ваги перевершують звичайні дрова в 2-3 рази і практично рівні кам\'яного\n' +
        '                    вугілля.\n' +
        '                </li>\n' +
        '                <li> За рахунок меншого обсягу, займаного Евродрова, Ви зможете економити площа зберігання і маєте\n' +
        '                    можливість тримати необхідний запас палива безпосередньо в котельні. Більше не потрібно бігати вночі\n' +
        '                    по морозу в дровницу.\n' +
        '                </li>\n' +
        '                <li> Паливні брикети обійдуться Вам дешевше, ніж еквівалентна по тепловіддачі кількість дров.</li>\n' +
        '                <li> За рахунок меншого утворення продуктів згоряння, виникає значна економія на послугах сажотруса (в\n' +
        '                    3-4 рази).\n' +
        '                </li>\n' +
        '                <li> Золу (0,3 - 1,0%), що утворюється при згоранні паливних брикетів, надалі можна використовувати як\n' +
        '                    мінеральне добриво.\n' +
        '                </li>\n' +
        '            </ul>\n' +
        '            <li class="Title">Зручність і час</li>\n' +
        '            <ul>\n' +
        '                <li>Підходять для всіх видів котлів, печей, камінів, що працюють на дровах, вугіллі, палетах, торфі\n' +
        '                    (тверде паливо). Відмінно горять в мангалі, барбекю, грилях тощо. Добре розпалюються, забезпечують\n' +
        '                    постійну температуру горіння.\n' +
        '                </li>\n' +
        '                <li>Чистий, зручна упаковка. При перенесенні і закладці евродров Ви не забрудниться і не Насмітили в\n' +
        '                    приміщенні.\n' +
        '                </li>\n' +
        '                <li>Мають високу тривалістю горіння (40 хвилин) і тління (до 200 хвилин). У порівнянні зі звичайними\n' +
        '                    дровами, закладку в піч можна виробляти в 2-3 рази рідше.\n' +
        '                </li>\n' +
        '            </ul>\n' +
        '            <li class="Title">Екологія і безпека</li>\n' +
        '            <ul>\n' +
        '                <li>Паливні брикети виключно чистий продукт в санітарно-гігієнічному плані, так як в процесі виробництва\n' +
        '                    не використовуються ніякі хімічні добавки і склеюють речовини.\n' +
        '                </li>\n' +
        '                <li> Не містять пилу і спор, що викликають алергію.</li>\n' +
        '                <li>При горінні не поширюють неприємного запаху, а також, не стріляють і не іскрять, практично не\n' +
        '                    виділяють диму, кіптяви, чадного газу та ін. Шкідливих речовин, на відміну від дров або вугілля.\n' +
        '                </li>\n' +
        '                <li>При зберіганні паливні брикети НЕ самовоспламеняются при підвищенні температури, тому що не містять\n' +
        '                    прихованих пір. Не вибухонебезпечні, на відміну від газу, дизельного палива і т.п.\n' +
        '                </li>\n' +
        '            </ul>\n' +
        '            <li class="Title">Паливні брикети мають широкий спектр застосування</li>\n' +
        '            <ul>\n' +
        '                <li>Вони можуть використовуватися для опалення дач, будинків, камінів, печей, складських і виробничих\n' +
        '                    приміщень, ферм, теплиць, саун, котелень на твердому паливі, на ж / д транспорті і інших місць, де є\n' +
        '                    установки, що працюють на твердому паливі.\n' +
        '                </li>\n' +
        '                <li>Переваги перерд дровами</li>\n' +
        '                <li>Найбільш важливою перевагою брекета є його температура горіння, котороя в 1,5 - 2 рази вище ніж у\n' +
        '                    дров. Калорійність деревини становить 2500 - 2700 ккал / кг при 20% вологості, в той час як брекет\n' +
        '                    має калорійність 4500-4900 ккал / кг.\n' +
        '                </li>\n' +
        '                <li class="Title">Такі показники брiкета пов\'язані з тим що:</li>\n' +
        '                <ol>\n' +
        '                    <li>Вологість брикету значно нижче вологості деревини і становить 4-8% (зазвичай вологість деревини\n' +
        '                          - 15-20%). Пов\'язано це з тим, що в виробництво брекета обов\'язково входить етап сушіння.\n' +
        '                    </li>\n' +
        '                    <li>Брекети мають велику щільність. На 1 см3 припадає від 0.95 до 1г масі. Це вище ніж у деревини\n' +
        '                        (наприклад, щільність дуба становить 0,81г / 1см3).Тобто, в кожному см3 дуба міститься більше\n' +
        '                        корисного і пального деревного речовини, ніж в тополю. Щільність брикет 0,95-1г / см3. У них\n' +
        '                        вміст горючої речовини на одиницю об\'єму ще вище, ніж у дуба. Відповідно вище і теплотворна\n' +
        '                        способность.Нізкая вологість і висока щільність - запорука успіху брикетів. Якщо ми висушимо\n' +
        '                        дрова, то збільшимо їх тепловіддачу.\n' +
        '                    </li>\n' +
        '                </ol>\n' +
        '                <li class="Title">\n' +
        '                    Ряд переваг брикетів:\n' +
        '                </li>\n' +
        '                <ol>\n' +
        '                    <li>Займають менше місця.</li>\n' +
        '                    <li>Рівномірно і довше горять.</li>\n' +
        '                    <li>Робляться з відходів. Якщо вам не байдужа екологія і оточення.</li>\n' +
        '                    <li>За рахунок низької вологості, брикети виділяють менше сажі і слабкіше забруднюють димохід</li>\n' +
        '                </ol>\n' +
        '            </ul>\n' +
        '\n' +
        '        </ul>\n' +
        '<button class="btn btn-icon waves-effect waves-light btn-warning m-b-5 col-md-1 col-lg-1 col-xs-2 col-sm-1" ] id="View2"\n' +
        'style="margin-left: -43px; visibility: hidden;" onclick="BrHidenAll()"><i class="ti-angle-double-up"></i></button>\n' +
        '    </div>';
    $('#View2').css("visibility", "visible");

}

function BrHidenAll() {
    var offset = 70;
    $('#briketsmoretext').css("transition", "1s");
    $('#View1').css("visibility", "visible");
    document.getElementById("briketsmoretext").innerHTML = '';
            var target = document.getElementById("briketdescription");
            $('html, body').animate({scrollTop: $(target).offset().top-offset}, 1000);
            return false;
}

function BlReadMore() {
    $('#briketsmoretext').css("transition", "1s");
    $('#BlView1').css("visibility", "hidden");
    document.getElementById("boilersmoretext").innerHTML = '<div class="boilerMoveText"> \n' +
        '    <h3 class="text-center">Опис продукції</h3>\n' +
        '    <p> Якщо ви збираєтеся будувати власний будинок, і задумалися на тим, яку систему опалення вибрати, ми\n' +
        '        рекомендуємо зупиниться на твердопаливному котлі, який буде протоплювати природним біопаливом. Адже газове\n' +
        '        опалення менш безпечно, більш затратно і призводить до залежності від імпортного палива. Ставити дизельний\n' +
        '        котел - це найменш вдала ідея, так як ваш ділянку буде забруднений частками свинцю, сірки, бензолу та інших\n' +
        '        токсичних речовин. При цьому платити за нафтове паливо ви будете максимальну з усіх варіантів суму. </p>\n' +
        '    <h3 class="text-center" style="margin-top: 50px;">Брикети для опалення будинку</h3>\n' +
        '    <p>Завдяки конструкції котла - можна довантажувати котел паливом в процесі роботи, не чекаючи повного\n' +
        '                    прогорання палива. Потужність системи опалення можна збільшувати, шляхом паралельного підключення\n' +
        '                    додаткових котлів. Система опалення котлів - забезпечує комфортний температурний режим приватного\n' +
        '        будинку\n' +
        '                    в цілому\n' +
        '        , А також центральне опалення квартир, житлових приміщень і навіть промислових об\'єктів. </p>\n' +
        '    <p>Горіння палива відбувається в нижній частині котла, обладнаної проточними колосниками. Завантаження палива\n' +
        '                    значного обсягу дозволяє забезпечити його горіння протягом значного періоду (4-20 діб, в\n' +
        '                    Залежно від тепловитрат будівлі і якості палива). Завантаження палива ручна, видалення шлаку ручне.\n' +
        '    </p>\n' +
        '    <ul class="DescriptionText">\n' +
        '        <li class="Title">\n' +
        '            Переваги котла:\n' +
        '        </li>\n' +
        '        <ul>\n' +
        '            <li>тривале горіння на одному завантаженні (до 20 діб)</li>\n' +
        '            <li>безперервність процесу горіння під час довантаження палива</li>\n' +
        '            <li>розпал котла - один раз в сезон\n' +
        '            </li>\n' +
        '            <li>електронне управління процесом горіння\n' +
        '            </li>\n' +
        '            <li>техніки безпеки та екологічної (без контакту з відкритим вогнем під час довантаження)\n' +
        '            </li>\n' +
        '            <li>відсутність механічних вузлів і електронних блоків для подачі і дозування палива</li>\n' +
        '            <li>простота монтажу і обслуговування\n' +
        '            </li>\n' +
        '            <li>система опалення під ключ. Гарантія 100%</li>\n' +
        '        </ul>\n' +
        '        <li class="Title">\n' +
        '            Особливості конструкції:\n' +
        '        </li>\n' +
        '        <ul>\n' +
        '            <li>водяна обшивка по всьому периметру котла\n' +
        '            </li>\n' +
        '            <li>охолоджувані сталеві проточні колосники</li>\n' +
        '            <li>електронні компоненти і димосос європейського виробництва</li>\n' +
        '            <li>можливість підключення кімнатного термостата</li>\n' +
        '            <li>завантаження палива зверху\n' +
        '            </li>\n' +
        '        </ul>\n' +
        '    </ul>\n' +
        '    <button class="btn btn-info btn-bordred waves-effect w-md waves-light m-b-5 col-md-1 col-lg-1 col-xs-2 col-sm-1" style="visibility: visible;" id="BlView2"\n' +
        '    onclick="BlHidenAll()"><i class="ti-angle-double-up"></i></button>\n' +
        '</div>';
    $('#BlView2').css("visibility", "visible");

}

function BlHidenAll() {
    var offset = 70;
    $('#BlView1').css("visibility", "visible");
    document.getElementById("boilersmoretext").innerHTML = '';
    var target = document.getElementById("boilerdescription");
    $('html, body').animate({scrollTop: $(target).offset().top-offset}, 1000);
    return false;
}
