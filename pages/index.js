import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Button from '@mui/material/Button';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import CssBaseline from '@mui/material/CssBaseline';
import Grid from '@mui/material/Grid';
import Stack from '@mui/material/Stack';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import Link from '@mui/material/Link';
import { createTheme, ThemeProvider } from '@mui/material/styles';

import NavBar from '../components/navBar/navBar.js';

import CourseCard from '../components/course-card/CourseCard.js';

import Banner from '@components/Banner/Banner.js';
import Footer from '@components/Footer/Footer.js';

const data = [
  {
    course_id: 1,
    teacher_name: 'Simona Mountcastle',
    email: 'smountcastle0@ebay.co.uk',
    location: 'Skrwilno',
    bio_text:
      'Small batch crucifix helvetica kickstarter messenger bag before they sold out everyday carry viral ethical af next level chillwave hammock succulents pug.  Mixtape YOLO single-origin coffee sartorial, kitsch pitchfork ugh pabst letterpress.  Sartorial wayfarers lumbersexual retro before they sold out plaid etsy chillwave chicharrones portland gastropub VHS artisan tumblr.  Typewriter shaman locavore ramps, tumeric ugh pabst.  Umami kickstarter coloring book kitsch chartreuse, ramps plaid copper mug.  Offal everyday carry intelligentsia glossier, woke deep v microdosing selvage freegan hexagon scenester.  Mlkshk listicle portland raw denim, meditation lyft hoodie mustache hashtag.',
    long_description:
      "Heirloom gastropub whatever cardigan neutra listicle wayfarers.  Cardigan you probably haven't heard of them four dollar toast, lumbersexual iceland affogato hexagon pabst poutine live-edge vexillologist af prism.  Man bun live-edge subway tile literally lumbersexual pug.  Hella freegan iceland small batch poke slow-carb.  Try-hard vice ennui pork belly, 90's subway tile echo park heirloom bushwick blog readymade lo-fi kogi flannel street art.  Squid farm-to-table butcher ugh heirloom direct trade.",
    is_online: 'true',
    is_offline: 'true',
    image: 'https://images.unsplash.com/photo-1461344577544-4e5dc9487184',
    course_brief:
      'Master cleanse taiyaki ethical bushwick slow-carb migas XOXO direct trade',
  },
  {
    course_id: 2,
    teacher_name: 'Carri Copas',
    email: 'ccopas1@slate.com',
    location: 'Gaotan',
    bio_text:
      'Lomo distillery pickled polaroid crucifix.  Cloud bread fashion axe bushwick cornhole adaptogen flexitarian pinterest whatever.  Synth 8-bit beard man bun biodiesel.  Scenester tumeric edison bulb intelligentsia.  Umami snackwave franzen subway tile put a bird on it four loko retro jean shorts edison bulb marfa paleo.  YOLO humblebrag subway tile, blog squid wayfarers seitan sriracha man braid artisan try-hard freegan.',
    long_description:
      'Man bun four loko forage mumblecore, fashion axe yuccie squid wolf.  Organic williamsburg PBR&B raclette live-edge pok pok af literally tumblr.  Master cleanse artisan meh cray VHS yuccie, jean shorts franzen blog edison bulb iPhone leggings pickled man bun bicycle rights.  Food truck kogi distillery air plant asymmetrical green juice portland intelligentsia gochujang cornhole freegan brooklyn adaptogen tofu cloud bread.',
    is_online: 'true',
    is_offline: 'true',
    image: 'https://images.unsplash.com/photo-1496769843785-93aa0be525dc',
    course_brief: ' Actually etsy brunch trust fund, banjo meggings craft beer',
  },
  {
    course_id: 3,
    teacher_name: 'Spencer Chambers',
    email: 'schambers2@nationalgeographic.com',
    location: 'Golovchino',
    bio_text:
      "Sriracha poke organic four loko locavore, aesthetic raclette tattooed letterpress vinyl.  Whatever you probably haven't heard of them schlitz small batch 8-bit.  Vaporware locavore PBR&B DIY.  Copper mug twee deep v, tumeric banjo messenger bag asymmetrical DIY fingerstache hexagon.",
    long_description:
      'Sartorial photo booth hot chicken fixie try-hard, pitchfork microdosing freegan.  Photo booth fanny pack swag vinyl actually four loko roof party kitsch af gluten-free narwhal.  Single-origin coffee trust fund chicharrones waistcoat cliche ramps la croix celiac thundercats cardigan.  Messenger bag glossier photo booth health goth knausgaard cray coloring book 8-bit lumbersexual pork belly paleo kinfolk typewriter.',
    is_online: 'true',
    is_offline: 'false',
    image: 'https://images.unsplash.com/photo-1614644147798-f8c0fc9da7f6',
    course_brief:
      ' Crucifix poutine YOLO, godard beard roof party plaid thundercats tacos kitsch shabby chic street art',
  },
  {
    course_id: 4,
    teacher_name: 'Meir Jerisch',
    email: 'mjerisch3@admin.ch',
    location: 'Kakegawa',
    bio_text:
      'Crucifix sustainable truffaut bespoke migas microdosing.  Try-hard iceland offal master cleanse seitan.  Portland twee air plant, flexitarian scenester truffaut keffiyeh put a bird on it fingerstache meggings migas.  Pop-up wayfarers selfies, sartorial irony health goth lomo migas tumblr iPhone pug.',
    long_description:
      'Ramps ethical scenester meh paleo migas.  Humblebrag echo park YOLO neutra, vaporware messenger bag tousled sustainable.  8-bit polaroid af small batch.  Chia thundercats palo santo, hammock chillwave brunch iceland lo-fi organic.',
    is_online: 'true',
    is_offline: 'false',
    image: 'https://images.unsplash.com/photo-1493106641515-6b5631de4bb9',
    course_brief:
      ' Flannel kale chips tumblr organic irony sustainable fixie YOLO lyft master cleanse cloud bread vaporware aesthetic tilde',
  },
  {
    course_id: 5,
    teacher_name: 'Glenda Kasparski',
    email: 'gkasparski4@time.com',
    location: 'Sevan',
    bio_text:
      "Drinking vinegar 3 wolf moon street art mustache tote bag man bun church-key ethical copper mug health goth hell of you probably haven't heard of them tilde hexagon.  Flexitarian tumeric master cleanse, hoodie bitters la croix subway tile 8-bit try-hard.  Post-ironic meditation chambray drinking vinegar cardigan readymade chicharrones.  Man bun tilde ethical taxidermy activated charcoal.  Next level bitters taiyaki kitsch mumblecore, bespoke glossier williamsburg bicycle rights air plant edison bulb.  Bespoke williamsburg tumblr raclette enamel pin live-edge occupy pinterest umami tofu bushwick lyft.  Artisan poutine before they sold out squid.",
    long_description:
      "XOXO subway tile meggings keffiyeh coloring book.  Sustainable kombucha blog fingerstache.  Hashtag vape sriracha, everyday carry brunch etsy franzen fanny pack cold-pressed slow-carb pok pok.  Venmo kombucha cliche aesthetic raw denim artisan blog drinking vinegar biodiesel put a bird on it lo-fi before they sold out knausgaard.  Cronut sartorial health goth tote bag church-key thundercats williamsburg heirloom gochujang shaman.  Vice 90's kitsch poke asymmetrical you probably haven't heard of them.  Keytar jianbing irony, tote bag 90's salvia stumptown intelligentsia street art vice small batch fam prism flexitarian meggings.",
    is_online: 'true',
    is_offline: 'false',
    image: 'https://images.unsplash.com/photo-1573496358961-3c82861ab8f4',
    course_brief:
      ' Food truck cornhole put a bird on it kickstarter letterpress, flexitarian pinterest pork belly mixtape',
  },
  {
    course_id: 6,
    teacher_name: 'Kora Bruckent',
    email: 'kbruckent5@seesaa.net',
    location: 'Kulia Village',
    bio_text:
      'Art party umami jean shorts squid vexillologist cronut, palo santo ennui subway tile chicharrones bitters.  Intelligentsia four loko next level kickstarter.  Hot chicken green juice artisan hammock ethical church-key enamel pin glossier lomo tofu everyday carry tumblr 3 wolf moon pabst meggings.  Mlkshk flannel vegan, banh mi cloud bread butcher raw denim bicycle rights semiotics waistcoat pok pok.  Shoreditch pork belly twee hot chicken tousled craft beer cronut iPhone migas, small batch mustache.  Gentrify food truck 3 wolf moon small batch, lyft normcore glossier man braid leggings humblebrag.  Banh mi shoreditch listicle enamel pin, thundercats hot chicken health goth intelligentsia bespoke.',
    long_description:
      "Yr brooklyn forage typewriter sustainable single-origin coffee locavore chia glossier kitsch mixtape sriracha keffiyeh man braid blog.  Cornhole ethical etsy post-ironic organic pour-over meggings jianbing.  Ugh hella tousled tacos.  Put a bird on it echo park keffiyeh, you probably haven't heard of them offal pop-up kinfolk kale chips mlkshk hoodie occupy slow-carb brooklyn locavore.  Offal chicharrones whatever venmo austin twee kinfolk vaporware heirloom subway tile try-hard vinyl biodiesel.  Prism pug pinterest, woke semiotics biodiesel salvia art party poutine church-key post-ironic vinyl kitsch.  Butcher master cleanse dreamcatcher seitan vice lumbersexual fam crucifix.",
    is_online: 'true',
    is_offline: 'true',
    image: 'https://images.unsplash.com/photo-1531746020798-e6953c6e8e04',
    course_brief:
      ' Hella blog roof party marfa cornhole banjo, plaid put a bird on it leggings meggings ramps air plant yuccie brunch wolf',
  },
  {
    course_id: 7,
    teacher_name: 'Nickolas Diperaus',
    email: 'ndiperaus6@live.com',
    location: 'Kuanfeu',
    bio_text:
      'Unicorn ennui chartreuse shabby chic green juice direct trade tattooed seitan, pickled authentic hell of ethical man braid kinfolk heirloom.  Cold-pressed raw denim asymmetrical pug truffaut kogi, 3 wolf moon listicle stumptown deep v.  Distillery mlkshk chillwave, helvetica aesthetic lomo deep v hashtag small batch four dollar toast street art kickstarter occupy.  Enamel pin slow-carb pug iceland.',
    long_description:
      "Waistcoat bicycle rights pop-up, 90's snackwave migas vice +1 raclette salvia hexagon master cleanse taxidermy locavore shabby chic.  Etsy pok pok franzen af, raclette thundercats narwhal cloud bread.  Mixtape normcore irony palo santo bicycle rights raclette artisan literally slow-carb portland truffaut pop-up.  Man bun offal wayfarers, flexitarian kinfolk la croix squid drinking vinegar poke iPhone.  Cardigan try-hard flannel echo park squid.  Letterpress vaporware selfies kombucha wolf street art quinoa gastropub tumeric viral bicycle rights normcore pug flexitarian.",
    is_online: 'true',
    is_offline: 'true',
    image: 'https://images.unsplash.com/photo-1589279715734-6631a314dfa2',
    course_brief: ' Art party shabby chic salvia readymade tousled health goth',
  },
  {
    course_id: 8,
    teacher_name: 'Mada Cosely',
    email: 'mcosely7@examiner.com',
    location: 'Ōtsu-shi',
    bio_text:
      'Whatever iceland +1, master cleanse kombucha butcher four dollar toast slow-carb.  Leggings franzen pour-over DIY, slow-carb bushwick VHS vexillologist green juice butcher flexitarian twee drinking vinegar.  Poutine try-hard shabby chic, organic air plant activated charcoal lo-fi unicorn scenester cloud bread health goth meggings.  Swag vexillologist irony meditation.  Austin hoodie knausgaard vice palo santo tousled.  Pabst cardigan thundercats lumbersexual mixtape beard godard biodiesel raw denim try-hard subway tile readymade next level fixie.',
    long_description:
      "Vexillologist sustainable hot chicken readymade tousled chillwave.  Affogato ramps copper mug blog af VHS everyday carry 8-bit flannel asymmetrical activated charcoal.  Street art waistcoat twee blog tumblr hashtag, trust fund palo santo art party celiac.  You probably haven't heard of them VHS edison bulb, biodiesel echo park pickled irony deep v tofu photo booth meggings food truck.",
    is_online: 'false',
    is_offline: 'true',
    image: 'https://images.unsplash.com/photo-1598630388567-9fdbfd7e928e',
    course_brief:
      ' Authentic quinoa raclette poutine vexillologist trust fund, XOXO sustainable williamsburg green juice man bun jianbing narwhal brooklyn',
  },
  {
    course_id: 9,
    teacher_name: 'Marquita Hamblyn',
    email: 'mhamblyn8@google.ca',
    location: 'Izra‘',
    bio_text:
      'Kinfolk iceland cray raclette trust fund pour-over activated charcoal letterpress lomo quinoa.  Pitchfork vinyl lomo austin gluten-free celiac.  Swag prism adaptogen neutra.  Portland pork belly pok pok butcher, fam woke ramps messenger bag snackwave green juice af hell of helvetica succulents letterpress.',
    long_description:
      "Brooklyn vegan hot chicken readymade twee.  Affogato migas kale chips waistcoat pabst, heirloom pitchfork plaid kickstarter schlitz organic gluten-free irony whatever shabby chic.  Migas literally DIY lo-fi PBR&B poke.  Roof party kogi activated charcoal gentrify pug hammock art party vegan DIY vexillologist coloring book.  Marfa raclette cliche, truffaut keytar listicle distillery deep v intelligentsia tattooed hammock umami tofu.  Leggings 90's shabby chic beard etsy kale chips.",
    is_online: 'true',
    is_offline: 'false',
    image: 'https://images.unsplash.com/photo-1566554273541-37a9ca77b91f',
    course_brief:
      ' Chartreuse franzen health goth, kogi DIY cloud bread air plant farm-to-table glossier',
  },
  {
    course_id: 10,
    teacher_name: 'Sammy Danihelka',
    email: 'sdanihelka9@gmpg.org',
    location: 'Chiţcani',
    bio_text:
      'Retro raclette ennui put a bird on it chillwave blog twee aesthetic cold-pressed stumptown tacos.  Cred shoreditch viral PBR&B cliche single-origin coffee normcore, food truck pok pok literally tacos squid keffiyeh twee godard.  Sartorial gochujang pork belly skateboard godard, biodiesel succulents.  Banjo pitchfork mlkshk keffiyeh live-edge crucifix tbh ramps ethical wolf humblebrag next level polaroid.  Blue bottle bespoke brooklyn fam truffaut gluten-free pour-over.',
    long_description:
      "Direct trade everyday carry tousled, gochujang helvetica pork belly meditation before they sold out pickled.  Messenger bag mumblecore kale chips banh mi.  You probably haven't heard of them cliche pork belly, la croix waistcoat austin godard man braid biodiesel tilde tbh bushwick shaman yuccie truffaut.  You probably haven't heard of them single-origin coffee salvia, 8-bit cray coloring book small batch kinfolk flannel man braid.",
    is_online: 'true',
    is_offline: 'false',
    image: 'https://images.unsplash.com/photo-1600565193348-f74bd3c7ccdf',
    course_brief:
      ' Put a bird on it church-key tacos VHS lo-fi everyday carry salvia, occupy jianbing bicycle rights vexillologist',
  },
  {
    course_id: 11,
    teacher_name: 'Maia Ribbens',
    email: 'mribbensa@moonfruit.com',
    location: 'Lenchwe Le Tau',
    bio_text:
      'Banh mi quinoa truffaut butcher.  Deep v meditation street art, cardigan tumeric biodiesel shoreditch brooklyn sriracha twee air plant narwhal.  Readymade pour-over coloring book meh squid, vegan church-key quinoa 8-bit.  Distillery hoodie mustache humblebrag vaporware austin crucifix aesthetic shaman taxidermy.',
    long_description:
      'Whatever neutra blog, tofu taxidermy pug hexagon pitchfork yr pabst artisan brooklyn +1 3 wolf moon portland.  Schlitz deep v bitters, roof party scenester succulents food truck.  Williamsburg heirloom roof party polaroid, seitan truffaut snackwave subway tile gentrify four loko.  Listicle brooklyn locavore, twee cronut vape direct trade photo booth pop-up vinyl green juice selvage skateboard bicycle rights.  Celiac raclette hot chicken authentic.  Knausgaard chicharrones lomo adaptogen tacos brunch cloud bread tousled glossier etsy deep v hoodie beard freegan.  Marfa typewriter flannel, fixie tofu sartorial banjo tote bag paleo hashtag scenester fam meggings heirloom.',
    is_online: 'true',
    is_offline: 'false',
    image: 'https://images.unsplash.com/photo-1608613304899-ea8098577e38',
    course_brief:
      ' Four dollar toast glossier authentic, messenger bag post-ironic leggings bicycle rights',
  },
  {
    course_id: 12,
    teacher_name: 'Marlo Moorwood',
    email: 'mmoorwoodb@nih.gov',
    location: 'Anguera',
    bio_text:
      'Post-ironic hell of chia la croix.  Semiotics yuccie 3 wolf moon, bespoke typewriter vape vegan disrupt.  Ennui migas bitters semiotics skateboard put a bird on it shaman.  Tote bag sriracha messenger bag austin jean shorts man braid celiac put a bird on it williamsburg tumblr mlkshk readymade locavore umami offal.  Edison bulb four dollar toast kogi subway tile, flexitarian cronut skateboard shaman fanny pack chillwave polaroid.  Crucifix activated charcoal fingerstache letterpress, godard cloud bread flexitarian ennui listicle YOLO chicharrones waistcoat dreamcatcher.  Art party selvage thundercats, austin tilde pok pok taxidermy deep v put a bird on it.',
    long_description:
      'Mlkshk offal master cleanse post-ironic venmo.  Health goth franzen farm-to-table tumblr typewriter.  Brunch tattooed af cronut glossier narwhal.  Deep v tofu heirloom marfa PBR&B selvage cardigan aesthetic man bun hell of crucifix swag salvia.  Post-ironic wayfarers man braid authentic mumblecore salvia.  Woke yuccie cloud bread chartreuse.  Irony shoreditch knausgaard quinoa, selfies ennui readymade.',
    is_online: 'true',
    is_offline: 'false',
    image: 'https://images.unsplash.com/photo-1618090584126-129cd1f3fbae',
    course_brief:
      " Cred kogi 90's, snackwave retro succulents sustainable fanny pack heirloom irony",
  },
  {
    course_id: 13,
    teacher_name: 'Myron Chaplyn',
    email: 'mchaplync@printfriendly.com',
    location: 'Anjozorobe',
    bio_text:
      'Man braid typewriter tousled pabst affogato pork belly small batch authentic tacos shoreditch narwhal lomo copper mug.  Waistcoat neutra man bun fanny pack woke bespoke 3 wolf moon occupy sriracha.  Art party microdosing pour-over meditation snackwave master cleanse banjo portland.  Jean shorts flexitarian taiyaki, single-origin coffee cronut meh bushwick meggings schlitz.  Master cleanse artisan photo booth swag pop-up cliche.  Letterpress meditation disrupt hell of retro.  Venmo meh taiyaki, forage yr selfies DIY vinyl chicharrones iceland knausgaard hoodie.',
    long_description:
      'Iceland prism cloud bread tacos.  Tacos cornhole cray gastropub humblebrag cronut.  +1 bitters pop-up church-key retro cronut blue bottle chillwave unicorn.  Cronut keffiyeh enamel pin, gluten-free kombucha ennui hella vape.  Air plant franzen trust fund helvetica vinyl pug.  Hella hoodie portland sustainable, keytar fam banjo pickled try-hard normcore poke post-ironic lyft drinking vinegar copper mug.  Hexagon chicharrones hammock, drinking vinegar gluten-free truffaut semiotics vape celiac pinterest twee.',
    is_online: 'true',
    is_offline: 'true',
    image: 'https://images.unsplash.com/photo-1469833120660-1a218b53d28a',
    course_brief:
      ' Unicorn marfa cronut, keffiyeh normcore polaroid brunch chicharrones iPhone squid poke DIY YOLO',
  },
  {
    course_id: 14,
    teacher_name: 'Tessi Langhor',
    email: 'tlanghord@storify.com',
    location: 'San Miguel del Padrón',
    bio_text:
      "Distillery la croix mustache, poutine bushwick lo-fi tumeric +1 irony 8-bit mumblecore thundercats.  Flexitarian bitters vexillologist DIY next level yr fam mumblecore VHS typewriter irony blog.  You probably haven't heard of them intelligentsia ramps master cleanse pitchfork fanny pack selfies biodiesel DIY trust fund.  Edison bulb tumeric brunch copper mug portland adaptogen.  90's yuccie humblebrag helvetica ramps hot chicken, skateboard scenester lyft.  Quinoa yuccie mixtape disrupt echo park, messenger bag blog post-ironic cornhole prism cloud bread flexitarian celiac 3 wolf moon street art.  Plaid whatever austin pork belly.",
    long_description:
      'Tousled la croix intelligentsia, seitan meh gentrify bicycle rights poutine.  Glossier letterpress organic disrupt microdosing hashtag leggings street art 3 wolf moon neutra freegan slow-carb.  Dreamcatcher hammock art party, flannel kogi gentrify kombucha VHS tofu.  Master cleanse sustainable semiotics pour-over, tacos humblebrag small batch marfa typewriter before they sold out kogi.',
    is_online: 'true',
    is_offline: 'true',
    image: 'https://images.unsplash.com/photo-1631273553464-7595e1a5b68d',
    course_brief: ' Hot chicken mumblecore hashtag mlkshk brooklyn',
  },
  {
    course_id: 15,
    teacher_name: 'Marnie Evill',
    email: 'meville@sciencedaily.com',
    location: 'Ciudad Sandino',
    bio_text:
      'Kogi plaid banh mi mumblecore cray literally truffaut tacos edison bulb put a bird on it selfies banjo ethical.  Mlkshk enamel pin austin, letterpress intelligentsia ramps post-ironic tbh unicorn 3 wolf moon bespoke roof party pitchfork af vaporware.  Williamsburg ennui taxidermy, hammock bitters banjo church-key.  Waistcoat marfa shoreditch cray palo santo, messenger bag iPhone activated charcoal knausgaard authentic retro raclette.  Cornhole XOXO lo-fi dreamcatcher activated charcoal hella venmo.  Twee roof party letterpress pour-over gentrify locavore squid meditation vaporware crucifix try-hard.  Pork belly synth YOLO, listicle wayfarers bitters tattooed chartreuse glossier selvage affogato banh mi everyday carry shabby chic master cleanse.',
    long_description:
      'Blue bottle narwhal cold-pressed street art single-origin coffee butcher.  Authentic farm-to-table hella, thundercats hammock poutine microdosing fashion axe iPhone crucifix blog schlitz next level YOLO lomo.  Adaptogen food truck everyday carry knausgaard, messenger bag cred twee selfies pour-over beard mlkshk.  Listicle umami master cleanse synth ennui cold-pressed photo booth tilde blog banh mi knausgaard food truck try-hard swag shoreditch.',
    is_online: 'true',
    is_offline: 'false',
    image: 'https://images.unsplash.com/photo-1596939122461-e48c8a8a2d85',
    course_brief:
      ' Coloring book pitchfork everyday carry, cardigan taiyaki butcher ethical brunch woke',
  },
  {
    course_id: 16,
    teacher_name: 'Warde Earney',
    email: 'wearneyf@wisc.edu',
    location: 'Rivne',
    bio_text:
      'Vice pug chartreuse, yuccie crucifix disrupt af tumblr truffaut hot chicken bushwick drinking vinegar.  VHS blog unicorn readymade pug yuccie seitan vape cliche.  Mlkshk raw denim next level listicle, thundercats tote bag small batch pork belly helvetica chambray literally wayfarers.  Tofu gochujang iPhone, jianbing copper mug food truck photo booth paleo live-edge meditation tumblr put a bird on it flexitarian.  Bicycle rights marfa coloring book adaptogen pop-up banjo subway tile, hoodie pok pok kitsch williamsburg quinoa literally organic.  Hoodie lumbersexual roof party swag waistcoat deep v edison bulb.  Migas kitsch meditation offal chia vinyl.',
    long_description:
      'Franzen thundercats ugh pork belly four loko chia art party everyday carry street art put a bird on it pabst normcore copper mug.  Affogato coloring book fixie, crucifix hell of hashtag godard selvage kinfolk williamsburg squid roof party.  Semiotics vegan cliche, scenester tote bag occupy kombucha put a bird on it keffiyeh chambray.  Helvetica gochujang 8-bit tacos keytar put a bird on it.  3 wolf moon 8-bit cornhole yr taxidermy enamel pin.',
    is_online: 'true',
    is_offline: 'false',
    image: 'https://images.unsplash.com/photo-1504222490345-c075b6008014',
    course_brief: ' Wolf fingerstache vegan celiac twee stumptown',
  },
  {
    course_id: 17,
    teacher_name: 'Rubie Devereux',
    email: 'rdevereuxg@smh.com.au',
    location: 'Zliv',
    bio_text:
      'Shoreditch keffiyeh ethical aesthetic cred, franzen venmo salvia.  Franzen gochujang letterpress, ramps 8-bit fixie try-hard keffiyeh messenger bag roof party schlitz DIY.  Tumeric hoodie yuccie, direct trade tote bag art party skateboard four loko vape vexillologist austin health goth fixie poke organic.  Mumblecore portland distillery poutine single-origin coffee deep v artisan glossier vape polaroid.',
    long_description:
      "Disrupt keytar succulents street art unicorn art party ethical dreamcatcher cliche lo-fi biodiesel distillery banjo offal.  Letterpress bushwick master cleanse selvage 3 wolf moon drinking vinegar.  Crucifix salvia twee YOLO.  Distillery hoodie artisan, jianbing chartreuse 90's locavore hashtag aesthetic pabst jean shorts ramps.  Unicorn forage direct trade tumblr mixtape.  Hell of authentic vegan, roof party crucifix fixie blog tattooed freegan pork belly irony.  Hella cardigan banjo you probably haven't heard of them squid williamsburg salvia sartorial craft beer, live-edge ramps brooklyn put a bird on it bushwick literally.",
    is_online: 'false',
    is_offline: 'true',
    image: 'https://images.unsplash.com/photo-1623526104629-f1b8eb5bd195',
    course_brief:
      ' Activated charcoal poutine taiyaki air plant, slow-carb scenester umami fingerstache jean shorts lumbersexual lyft flannel kombucha',
  },
  {
    course_id: 18,
    teacher_name: 'Julia Bromhead',
    email: 'jbromheadh@cbsnews.com',
    location: 'Sindon',
    bio_text:
      "PBR&B meggings ramps, unicorn yr sartorial pork belly fingerstache normcore.  Drinking vinegar shabby chic roof party DIY small batch.  Meditation seitan keffiyeh 3 wolf moon slow-carb, kickstarter typewriter tilde flannel semiotics aesthetic art party.  Brooklyn hell of gochujang vaporware cornhole post-ironic freegan YOLO cloud bread yuccie drinking vinegar.  Portland 90's woke viral.  Cliche typewriter before they sold out PBR&B 90's four dollar toast salvia retro swag lo-fi hammock.",
    long_description:
      'Plaid prism hella bespoke biodiesel kale chips DIY fixie sustainable whatever thundercats scenester austin drinking vinegar crucifix.  Aesthetic blog 8-bit microdosing try-hard man bun chicharrones twee four loko edison bulb lomo cardigan hexagon.  Tote bag freegan chillwave disrupt.  Godard thundercats enamel pin marfa shaman irony yuccie hell of.  Pok pok street art chillwave irony iceland.  Pour-over mumblecore vexillologist, scenester gluten-free everyday carry letterpress portland man bun listicle whatever cardigan roof party ramps bicycle rights.',
    is_online: 'true',
    is_offline: 'true',
    image: 'https://images.unsplash.com/photo-1517971129774-8a2b38fa128e',
    course_brief:
      ' Jianbing pok pok blue bottle, taxidermy kinfolk artisan tbh',
  },
  {
    course_id: 19,
    teacher_name: "Remy O'Dare",
    email: 'rodarei@unesco.org',
    location: 'Kolambugan',
    bio_text:
      "Chillwave viral hot chicken marfa salvia.  Truffaut etsy retro slow-carb iceland pinterest you probably haven't heard of them direct trade live-edge fanny pack sustainable.  Flexitarian swag gluten-free direct trade.  Salvia hoodie vegan flannel food truck tousled pickled synth slow-carb plaid flexitarian.  Tumeric offal actually letterpress before they sold out single-origin coffee messenger bag squid tousled waistcoat kogi glossier skateboard.  Echo park pabst la croix, skateboard fashion axe try-hard ethical.  Next level tousled mumblecore slow-carb kogi letterpress shoreditch irony poutine.",
    long_description:
      "Gentrify sriracha adaptogen biodiesel pitchfork literally narwhal tumeric.  Asymmetrical pitchfork green juice pug pork belly unicorn deep v lomo iPhone 90's offal cray butcher hoodie chicharrones.  Pinterest offal migas hexagon blue bottle tofu vinyl salvia, DIY cold-pressed truffaut biodiesel activated charcoal wolf church-key.  Unicorn pabst four dollar toast, authentic taxidermy drinking vinegar mlkshk thundercats schlitz health goth hoodie leggings air plant.",
    is_online: 'false',
    is_offline: 'true',
    image: 'https://images.unsplash.com/photo-1599694522028-65abc96dfd2f',
    course_brief:
      ' Vape salvia schlitz slow-carb chia affogato before they sold out narwhal selvage, snackwave dreamcatcher portland intelligentsia normcore cred',
  },
  {
    course_id: 20,
    teacher_name: 'Cherlyn Edmand',
    email: 'cedmandj@multiply.com',
    location: 'Selínia',
    bio_text:
      'Sartorial pitchfork iceland messenger bag.  Lomo gentrify meggings iceland pitchfork tumblr mlkshk crucifix kickstarter authentic art party raw denim affogato.  Umami iPhone venmo everyday carry succulents lomo tote bag shoreditch kitsch poke four dollar toast quinoa intelligentsia.  Leggings helvetica umami, irony PBR&B tacos pug copper mug flexitarian vexillologist viral chartreuse.  Readymade irony sriracha unicorn chillwave palo santo.',
    long_description:
      'Cliche tilde venmo, celiac intelligentsia pok pok vinyl microdosing edison bulb.  Heirloom listicle cornhole affogato wayfarers chia raw denim normcore godard yr chartreuse hoodie single-origin coffee chillwave letterpress.  Plaid biodiesel chillwave, venmo salvia glossier +1 literally butcher.  Unicorn echo park edison bulb street art cardigan chia crucifix disrupt distillery butcher.',
    is_online: 'true',
    is_offline: 'false',
    image: 'https://images.unsplash.com/photo-1633887091273-a3bd71efddde',
    course_brief: ' Ugh cray flexitarian mumblecore vinyl',
  },
  {
    course_id: 21,
    teacher_name: 'Jilleen Symcock',
    email: 'jsymcockk@msu.edu',
    location: 'Bełżec',
    bio_text:
      "Pok pok four dollar toast blue bottle, migas woke vinyl enamel pin coloring book.  Fanny pack disrupt church-key freegan semiotics portland.  Pabst waistcoat readymade pitchfork whatever, sriracha DIY 90's lomo kombucha.  Quinoa pok pok art party, forage truffaut sustainable occupy selvage hammock green juice freegan pickled.  Succulents jean shorts tilde hell of cronut sriracha austin craft beer whatever bitters mustache lumbersexual gastropub.  +1 subway tile YOLO shoreditch, kinfolk direct trade pug synth.",
    long_description:
      'Pitchfork mustache YOLO, shoreditch iceland lumbersexual mumblecore meggings chartreuse fingerstache stumptown brunch fixie synth.  Hell of vaporware kitsch lumbersexual typewriter.  Selfies aesthetic swag, literally pinterest craft beer flannel polaroid narwhal.  Subway tile kitsch sustainable scenester pork belly salvia, selvage craft beer freegan portland taiyaki photo booth hexagon single-origin coffee.  Vaporware hammock marfa try-hard, vinyl fingerstache kale chips deep v swag jean shorts man bun fixie aesthetic la croix flexitarian.',
    is_online: 'true',
    is_offline: 'true',
    image: 'https://images.unsplash.com/photo-1558443957-d056622df610',
    course_brief:
      ' Plaid polaroid literally quinoa forage woke biodiesel viral kinfolk freegan neutra',
  },
  {
    course_id: 22,
    teacher_name: 'Dana Ollerhad',
    email: 'dollerhadl@bloglines.com',
    location: 'Velas',
    bio_text:
      'Ugh subway tile air plant pour-over.  Adaptogen gluten-free freegan jianbing, craft beer mlkshk synth sustainable pickled offal man braid authentic hella sriracha.  Fixie roof party distillery skateboard yuccie.  Keytar twee lo-fi tilde chicharrones, vaporware art party lomo literally man braid subway tile scenester hot chicken leggings woke.  Ramps wolf heirloom, jianbing mixtape scenester sriracha.  Humblebrag tumeric enamel pin post-ironic.  Bushwick flannel subway tile photo booth humblebrag coloring book etsy taiyaki raw denim vinyl cronut gastropub hashtag four dollar toast cray.',
    long_description:
      "Knausgaard gluten-free 8-bit activated charcoal shaman brooklyn jianbing glossier synth lo-fi +1 plaid single-origin coffee williamsburg pork belly.  Palo santo forage pok pok, sartorial next level bushwick jianbing literally.  Heirloom raclette franzen poke meggings vegan.  Distillery ennui mustache schlitz, prism tote bag gastropub echo park you probably haven't heard of them kombucha sustainable tbh chillwave YOLO.  Chicharrones tousled chillwave craft beer street art.  Af pinterest stumptown tumeric, occupy kinfolk before they sold out.",
    is_online: 'false',
    is_offline: 'true',
    image: 'https://images.unsplash.com/photo-1631739714671-0de24b57d810',
    course_brief:
      ' Microdosing pop-up farm-to-table, slow-carb flannel vinyl hot chicken VHS migas cold-pressed vexillologist skateboard mixtape scenester affogato',
  },
  {
    course_id: 23,
    teacher_name: 'Kelsi Drivers',
    email: 'kdriversm@statcounter.com',
    location: 'Pruchnik',
    bio_text:
      'Live-edge pop-up deep v chia, enamel pin banjo distillery man bun vinyl hella chicharrones.  Pickled offal echo park yr pabst pok pok irony bushwick mlkshk twee waistcoat tumblr semiotics.  Adaptogen mustache small batch fingerstache activated charcoal whatever glossier bitters craft beer coloring book lo-fi subway tile.  Street art bicycle rights snackwave photo booth umami.  PBR&B portland lo-fi microdosing hot chicken try-hard gluten-free shoreditch mixtape franzen offal tousled viral food truck.  Disrupt activated charcoal green juice kickstarter keffiyeh blog pickled gochujang polaroid vegan venmo.',
    long_description:
      'Direct trade shoreditch coloring book mixtape quinoa ethical, whatever bitters keffiyeh snackwave lomo crucifix distillery tattooed.  Hammock shabby chic bitters, cray swag edison bulb thundercats literally crucifix snackwave four loko.  Fashion axe cloud bread chambray austin pickled tofu asymmetrical, neutra before they sold out.  Organic truffaut tumeric hashtag subway tile ugh.  Four dollar toast man braid cardigan health goth truffaut cloud bread shaman.  Drinking vinegar jean shorts tilde mixtape biodiesel leggings bitters fixie disrupt cred hammock listicle.  Knausgaard four dollar toast cornhole meh, messenger bag green juice pinterest trust fund tbh sustainable.',
    is_online: 'false',
    is_offline: 'true',
    image: 'https://images.unsplash.com/photo-1618673747378-7e0d3561371a',
    course_brief: ' Farm-to-table mustache woke truffaut disrupt kinfolk ennui',
  },
  {
    course_id: 24,
    teacher_name: 'Cory Jewster',
    email: 'cjewstern@cloudflare.com',
    location: 'Lengji',
    bio_text:
      'Heirloom church-key small batch everyday carry, normcore bushwick cornhole next level.  Mlkshk blog small batch single-origin coffee cred cold-pressed chartreuse.  Helvetica humblebrag scenester pug, locavore af tumeric coloring book actually synth microdosing health goth chillwave hella next level.  Pitchfork try-hard before they sold out, portland hot chicken craft beer kombucha dreamcatcher migas.  Yuccie blue bottle VHS celiac ennui actually chillwave pok pok portland.',
    long_description:
      "Pitchfork twee unicorn bicycle rights hammock mixtape scenester brunch crucifix.  Pok pok bespoke dreamcatcher pitchfork raclette kogi prism master cleanse glossier chartreuse drinking vinegar etsy.  Pug affogato hoodie, gentrify photo booth tacos street art meditation copper mug.  Quinoa pinterest cloud bread, vaporware drinking vinegar tote bag actually.  Listicle 8-bit sustainable, semiotics post-ironic taxidermy beard fanny pack tattooed YOLO shoreditch forage.  Try-hard hexagon retro tattooed, brunch cronut mumblecore flannel typewriter listicle food truck pop-up selvage you probably haven't heard of them.",
    is_online: 'true',
    is_offline: 'true',
    image: 'https://images.unsplash.com/photo-1578961771886-97d51aee46bc',
    course_brief:
      ' Franzen direct trade bitters, gentrify narwhal hella ugh banjo copper mug everyday carry street art brooklyn lumbersexual tumblr',
  },
  {
    course_id: 25,
    teacher_name: 'Ferdinande Loncaster',
    email: 'floncastero@smugmug.com',
    location: 'Severomorsk',
    bio_text:
      'Copper mug bitters vegan, viral hot chicken vaporware freegan health goth gastropub actually jean shorts.  Hella crucifix gluten-free intelligentsia hell of scenester.  IPhone vaporware narwhal mixtape hell of 8-bit twee pabst cliche williamsburg.  Woke schlitz aesthetic cliche hella mlkshk kitsch keytar.  Cred try-hard gochujang ethical DIY celiac leggings aesthetic.  Aesthetic hella brooklyn chillwave man braid drinking vinegar, pitchfork plaid kogi ramps banh mi flexitarian pinterest thundercats.  Hell of cred gentrify locavore knausgaard distillery intelligentsia.',
    long_description:
      'Art party mustache wolf, drinking vinegar thundercats tilde activated charcoal etsy hexagon semiotics schlitz.  Selfies wolf stumptown bitters neutra, offal irony taxidermy artisan brooklyn.  Live-edge single-origin coffee kitsch, letterpress wolf pork belly bicycle rights poutine keffiyeh vape vaporware retro dreamcatcher.  Before they sold out coloring book mlkshk humblebrag activated charcoal pickled.  Edison bulb wolf readymade locavore.  Vaporware microdosing selvage intelligentsia vexillologist, ethical bushwick biodiesel four dollar toast direct trade tilde.',
    is_online: 'false',
    is_offline: 'true',
    image: 'https://images.unsplash.com/photo-1493863641943-9b68992a8d07',
    course_brief:
      ' Bushwick glossier literally meggings, vaporware squid snackwave meh ennui DIY chambray',
  },
];

const theme = createTheme();

export default function Album() {
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />

      {/* NavBar start */}
      <NavBar />
      {/* NavBar end */}

      <main>
        {/* Hero unit */}

        <Banner />
        {/* course card starts*/}
        <CourseCard cards={data} />
        {/* course card ends*/}
      </main>
      <Footer />
    </ThemeProvider>
  );
}
