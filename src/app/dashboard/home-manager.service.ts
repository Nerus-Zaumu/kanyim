import { HomeComponent } from './home/home.component';
import { TaskComponent } from './task/task.component';
import { FormGroup, FormControl } from '@angular/forms';
import { Injectable } from '@angular/core';
import { Task } from './models/task.model';
import { MatDialog } from '@angular/material/dialog';
import { Router, ActivatedRoute } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class HomeManagerService {

  displayedColumns: string[] = ['TASKID', 'TITLE', 'DESCRIPTION', 'STATUS']
  loadedTask!: Task | undefined;

  data: Task[] = [
    {
      taskID: "customer loyalty",
      taskTitle: "Fera Pharmaceuticals",
      taskDescription: "Sed ante. Vivamus tortor. Duis mattis egestas metus.\n\nAenean fermentum. Donec ut mauris eget massa tempor convallis. Nulla neque libero, convallis eget, eleifend luctus, ultricies eu, nibh.",
      taskStatus: "zero tolerance"
    }, {
      taskID: "Versatile",
      taskTitle: "Geiss, Destin + Dunmn, Inc",
      taskDescription: "Maecenas ut massa quis augue luctus tincidunt. Nulla mollis molestie lorem. Quisque ut erat.",
      taskStatus: "synergy"
    }, {
      taskID: "asymmetric",
      taskTitle: "ALK-Abello, Inc.",
      taskDescription: "Aliquam quis turpis eget elit sodales scelerisque. Mauris sit amet eros. Suspendisse accumsan tortor quis turpis.",
      taskStatus: "needs-based"
    }, {
      taskID: "dedicated",
      taskTitle: "Nelco Laboratories, Inc.",
      taskDescription: "Proin eu mi. Nulla ac enim. In tempor, turpis nec euismod scelerisque, quam turpis adipiscing lorem, vitae mattis nibh ligula nec sem.\n\nDuis aliquam convallis nunc. Proin at turpis a pede posuere nonummy. Integer non velit.\n\nDonec diam neque, vestibulum eget, vulputate ut, ultrices vel, augue. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Donec pharetra, magna vestibulum aliquet ultrices, erat tortor sollicitudin mi, sit amet lobortis sapien sapien non mi. Integer ac neque.",
      taskStatus: "middleware"
    }, {
      taskID: "3rd generation",
      taskTitle: "Teva Pharmaceuticals USA Inc",
      taskDescription: "Sed sagittis. Nam congue, risus semper porta volutpat, quam pede lobortis ligula, sit amet eleifend pede libero quis orci. Nullam molestie nibh in lectus.\n\nPellentesque at nulla. Suspendisse potenti. Cras in purus eu magna vulputate luctus.",
      taskStatus: "Ergonomic"
    }, {
      taskID: "Managed",
      taskTitle: "Nelco Laboratories, Inc.",
      taskDescription: "Duis consequat dui nec nisi volutpat eleifend. Donec ut dolor. Morbi vel lectus in quam fringilla rhoncus.\n\nMauris enim leo, rhoncus sed, vestibulum sit amet, cursus id, turpis. Integer aliquet, massa id lobortis convallis, tortor risus dapibus augue, vel accumsan tellus nisi eu orci. Mauris lacinia sapien quis libero.",
      taskStatus: "tangible"
    }, {
      taskID: "systematic",
      taskTitle: "ALK-Abello, Inc.",
      taskDescription: "In hac habitasse platea dictumst. Morbi vestibulum, velit id pretium iaculis, diam erat fermentum justo, nec condimentum neque sapien placerat ante. Nulla justo.\n\nAliquam quis turpis eget elit sodales scelerisque. Mauris sit amet eros. Suspendisse accumsan tortor quis turpis.\n\nSed ante. Vivamus tortor. Duis mattis egestas metus.",
      taskStatus: "knowledge user"
    }, {
      taskID: "budgetary management",
      taskTitle: "Rebel Distributors Corp",
      taskDescription: "In sagittis dui vel nisl. Duis ac nibh. Fusce lacus purus, aliquet at, feugiat non, pretium quis, lectus.\n\nSuspendisse potenti. In eleifend quam a odio. In hac habitasse platea dictumst.",
      taskStatus: "matrix"
    }, {
      taskID: "attitude-oriented",
      taskTitle: "Eagle Distributors,Inc.",
      taskDescription: "Nulla ut erat id mauris vulputate elementum. Nullam varius. Nulla facilisi.",
      taskStatus: "3rd generation"
    }, {
      taskID: "Diverse",
      taskTitle: "Amerisource Bergen",
      taskDescription: "Proin leo odio, porttitor id, consequat in, consequat ut, nulla. Sed accumsan felis. Ut at dolor quis odio consequat varius.\n\nInteger ac leo. Pellentesque ultrices mattis odio. Donec vitae nisi.",
      taskStatus: "Future-proofed"
    }, {
      taskID: "Digitized",
      taskTitle: "Moore Medical LLC",
      taskDescription: "Curabitur in libero ut massa volutpat convallis. Morbi odio odio, elementum eu, interdum eu, tincidunt in, leo. Maecenas pulvinar lobortis est.",
      taskStatus: "software"
    }, {
      taskID: "Open-source",
      taskTitle: "Liddell Laboratories, Inc.",
      taskDescription: "Nullam sit amet turpis elementum ligula vehicula consequat. Morbi a ipsum. Integer a nibh.\n\nIn quis justo. Maecenas rhoncus aliquam lacus. Morbi quis tortor id nulla ultrices aliquet.",
      taskStatus: "methodology"
    }, {
      taskID: "analyzing",
      taskTitle: "Mylan Institutional Inc.",
      taskDescription: "Vestibulum quam sapien, varius ut, blandit non, interdum in, ante. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Duis faucibus accumsan odio. Curabitur convallis.\n\nDuis consequat dui nec nisi volutpat eleifend. Donec ut dolor. Morbi vel lectus in quam fringilla rhoncus.\n\nMauris enim leo, rhoncus sed, vestibulum sit amet, cursus id, turpis. Integer aliquet, massa id lobortis convallis, tortor risus dapibus augue, vel accumsan tellus nisi eu orci. Mauris lacinia sapien quis libero.",
      taskStatus: "Implemented"
    }, {
      taskID: "local",
      taskTitle: "Reckitt Benckiser LLC",
      taskDescription: "Nulla ut erat id mauris vulputate elementum. Nullam varius. Nulla facilisi.",
      taskStatus: "non-volatile"
    }, {
      taskID: "Adaptive",
      taskTitle: "Caraco Pharmaceutical Laboratories, Ltd.",
      taskDescription: "Phasellus sit amet erat. Nulla tempus. Vivamus in felis eu sapien cursus vestibulum.\n\nProin eu mi. Nulla ac enim. In tempor, turpis nec euismod scelerisque, quam turpis adipiscing lorem, vitae mattis nibh ligula nec sem.\n\nDuis aliquam convallis nunc. Proin at turpis a pede posuere nonummy. Integer non velit.",
      taskStatus: "structure"
    }, {
      taskID: "Expanded",
      taskTitle: "Jubilant HollisterStier LLC",
      taskDescription: "In hac habitasse platea dictumst. Morbi vestibulum, velit id pretium iaculis, diam erat fermentum justo, nec condimentum neque sapien placerat ante. Nulla justo.\n\nAliquam quis turpis eget elit sodales scelerisque. Mauris sit amet eros. Suspendisse accumsan tortor quis turpis.",
      taskStatus: "orchestration"
    }, {
      taskID: "knowledge base",
      taskTitle: "UNIFIRST FIRST AID CORPORATION",
      taskDescription: "Praesent blandit. Nam nulla. Integer pede justo, lacinia eget, tincidunt eget, tempus vel, pede.",
      taskStatus: "forecast"
    }, {
      taskID: "groupware",
      taskTitle: "Apotheca Company",
      taskDescription: "Sed sagittis. Nam congue, risus semper porta volutpat, quam pede lobortis ligula, sit amet eleifend pede libero quis orci. Nullam molestie nibh in lectus.\n\nPellentesque at nulla. Suspendisse potenti. Cras in purus eu magna vulputate luctus.\n\nCum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Vivamus vestibulum sagittis sapien. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus.",
      taskStatus: "zero tolerance"
    }, {
      taskID: "dynamic",
      taskTitle: "CHANEL PARFUMS BEAUTE",
      taskDescription: "Donec diam neque, vestibulum eget, vulputate ut, ultrices vel, augue. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Donec pharetra, magna vestibulum aliquet ultrices, erat tortor sollicitudin mi, sit amet lobortis sapien sapien non mi. Integer ac neque.",
      taskStatus: "executive"
    }, {
      taskID: "paradigm",
      taskTitle: "Sandoz Inc",
      taskDescription: "Aenean lectus. Pellentesque eget nunc. Donec quis orci eget orci vehicula condimentum.\n\nCurabitur in libero ut massa volutpat convallis. Morbi odio odio, elementum eu, interdum eu, tincidunt in, leo. Maecenas pulvinar lobortis est.\n\nPhasellus sit amet erat. Nulla tempus. Vivamus in felis eu sapien cursus vestibulum.",
      taskStatus: "function"
    }, {
      taskID: "support",
      taskTitle: "H and P Industries, Inc. dba Triad Group",
      taskDescription: "Vestibulum ac est lacinia nisi venenatis tristique. Fusce congue, diam id ornare imperdiet, sapien urna pretium nisl, ut volutpat sapien arcu sed augue. Aliquam erat volutpat.\n\nIn congue. Etiam justo. Etiam pretium iaculis justo.\n\nIn hac habitasse platea dictumst. Etiam faucibus cursus urna. Ut tellus.",
      taskStatus: "even-keeled"
    }, {
      taskID: "forecast",
      taskTitle: "Antigen Laboratories, Inc.",
      taskDescription: "Vestibulum quam sapien, varius ut, blandit non, interdum in, ante. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Duis faucibus accumsan odio. Curabitur convallis.",
      taskStatus: "Persistent"
    }, {
      taskID: "Extended",
      taskTitle: "Nelco Laboratories, Inc.",
      taskDescription: "Nullam porttitor lacus at turpis. Donec posuere metus vitae ipsum. Aliquam non mauris.\n\nMorbi non lectus. Aliquam sit amet diam in magna bibendum imperdiet. Nullam orci pede, venenatis non, sodales sed, tincidunt eu, felis.",
      taskStatus: "national"
    }, {
      taskID: "Persistent",
      taskTitle: "The Body Shop Wake Forest",
      taskDescription: "Curabitur gravida nisi at nibh. In hac habitasse platea dictumst. Aliquam augue quam, sollicitudin vitae, consectetuer eget, rutrum at, lorem.\n\nInteger tincidunt ante vel ipsum. Praesent blandit lacinia erat. Vestibulum sed magna at nunc commodo placerat.",
      taskStatus: "Monitored"
    }, {
      taskID: "uniform",
      taskTitle: "Onpoint, Inc.",
      taskDescription: "Phasellus sit amet erat. Nulla tempus. Vivamus in felis eu sapien cursus vestibulum.\n\nProin eu mi. Nulla ac enim. In tempor, turpis nec euismod scelerisque, quam turpis adipiscing lorem, vitae mattis nibh ligula nec sem.\n\nDuis aliquam convallis nunc. Proin at turpis a pede posuere nonummy. Integer non velit.",
      taskStatus: "concept"
    }, {
      taskID: "conglomeration",
      taskTitle: "McKesson Contract Packaging",
      taskDescription: "Nullam porttitor lacus at turpis. Donec posuere metus vitae ipsum. Aliquam non mauris.\n\nMorbi non lectus. Aliquam sit amet diam in magna bibendum imperdiet. Nullam orci pede, venenatis non, sodales sed, tincidunt eu, felis.",
      taskStatus: "Sharable"
    }, {
      taskID: "conglomeration",
      taskTitle: "Project, Inc.",
      taskDescription: "Integer tincidunt ante vel ipsum. Praesent blandit lacinia erat. Vestibulum sed magna at nunc commodo placerat.",
      taskStatus: "Public-key"
    }, {
      taskID: "concept",
      taskTitle: "Physicians Total Care, Inc.",
      taskDescription: "Aenean fermentum. Donec ut mauris eget massa tempor convallis. Nulla neque libero, convallis eget, eleifend luctus, ultricies eu, nibh.",
      taskStatus: "Distributed"
    }, {
      taskID: "content-based",
      taskTitle: "Antigen Laboratories, Inc.",
      taskDescription: "Phasellus sit amet erat. Nulla tempus. Vivamus in felis eu sapien cursus vestibulum.",
      taskStatus: "6th generation"
    }, {
      taskID: "responsive",
      taskTitle: "Amerisource Bergen",
      taskDescription: "In congue. Etiam justo. Etiam pretium iaculis justo.",
      taskStatus: "User-friendly"
    }, {
      taskID: "full-range",
      taskTitle: "Roxane Laboratories, Inc",
      taskDescription: "Nullam porttitor lacus at turpis. Donec posuere metus vitae ipsum. Aliquam non mauris.\n\nMorbi non lectus. Aliquam sit amet diam in magna bibendum imperdiet. Nullam orci pede, venenatis non, sodales sed, tincidunt eu, felis.",
      taskStatus: "regional"
    }, {
      taskID: "Automated",
      taskTitle: "Uriel Pharmacy Inc.",
      taskDescription: "Curabitur gravida nisi at nibh. In hac habitasse platea dictumst. Aliquam augue quam, sollicitudin vitae, consectetuer eget, rutrum at, lorem.\n\nInteger tincidunt ante vel ipsum. Praesent blandit lacinia erat. Vestibulum sed magna at nunc commodo placerat.\n\nPraesent blandit. Nam nulla. Integer pede justo, lacinia eget, tincidunt eget, tempus vel, pede.",
      taskStatus: "Multi-layered"
    }, {
      taskID: "full-range",
      taskTitle: "Rebel Distributors Corp",
      taskDescription: "Sed sagittis. Nam congue, risus semper porta volutpat, quam pede lobortis ligula, sit amet eleifend pede libero quis orci. Nullam molestie nibh in lectus.\n\nPellentesque at nulla. Suspendisse potenti. Cras in purus eu magna vulputate luctus.",
      taskStatus: "Phased"
    }, {
      taskID: "middleware",
      taskTitle: "Glytone",
      taskDescription: "Duis bibendum, felis sed interdum venenatis, turpis enim blandit mi, in porttitor pede justo eu massa. Donec dapibus. Duis at velit eu est congue elementum.\n\nIn hac habitasse platea dictumst. Morbi vestibulum, velit id pretium iaculis, diam erat fermentum justo, nec condimentum neque sapien placerat ante. Nulla justo.\n\nAliquam quis turpis eget elit sodales scelerisque. Mauris sit amet eros. Suspendisse accumsan tortor quis turpis.",
      taskStatus: "Automated"
    }, {
      taskID: "attitude-oriented",
      taskTitle: "Homeocare Laboratories",
      taskDescription: "In quis justo. Maecenas rhoncus aliquam lacus. Morbi quis tortor id nulla ultrices aliquet.\n\nMaecenas leo odio, condimentum id, luctus nec, molestie sed, justo. Pellentesque viverra pede ac diam. Cras pellentesque volutpat dui.",
      taskStatus: "empowering"
    }, {
      taskID: "contextually-based",
      taskTitle: "Kmart Corporation",
      taskDescription: "Aliquam quis turpis eget elit sodales scelerisque. Mauris sit amet eros. Suspendisse accumsan tortor quis turpis.\n\nSed ante. Vivamus tortor. Duis mattis egestas metus.\n\nAenean fermentum. Donec ut mauris eget massa tempor convallis. Nulla neque libero, convallis eget, eleifend luctus, ultricies eu, nibh.",
      taskStatus: "explicit"
    }, {
      taskID: "capacity",
      taskTitle: "State of Florida DOH Central Pharmacy",
      taskDescription: "Praesent id massa id nisl venenatis lacinia. Aenean sit amet justo. Morbi ut odio.\n\nCras mi pede, malesuada in, imperdiet et, commodo vulputate, justo. In blandit ultrices enim. Lorem ipsum dolor sit amet, consectetuer adipiscing elit.",
      taskStatus: "website"
    }, {
      taskID: "encoding",
      taskTitle: "PharmaDerm a division of Fougera Pharmaceuticals Inc.",
      taskDescription: "Integer tincidunt ante vel ipsum. Praesent blandit lacinia erat. Vestibulum sed magna at nunc commodo placerat.\n\nPraesent blandit. Nam nulla. Integer pede justo, lacinia eget, tincidunt eget, tempus vel, pede.",
      taskStatus: "4th generation"
    }, {
      taskID: "firmware",
      taskTitle: "CVS Pharmacy",
      taskDescription: "Nullam sit amet turpis elementum ligula vehicula consequat. Morbi a ipsum. Integer a nibh.\n\nIn quis justo. Maecenas rhoncus aliquam lacus. Morbi quis tortor id nulla ultrices aliquet.\n\nMaecenas leo odio, condimentum id, luctus nec, molestie sed, justo. Pellentesque viverra pede ac diam. Cras pellentesque volutpat dui.",
      taskStatus: "client-server"
    }, {
      taskID: "needs-based",
      taskTitle: "Pacific Word Corporation",
      taskDescription: "Aliquam quis turpis eget elit sodales scelerisque. Mauris sit amet eros. Suspendisse accumsan tortor quis turpis.\n\nSed ante. Vivamus tortor. Duis mattis egestas metus.",
      taskStatus: "Integrated"
    }, {
      taskID: "Horizontal",
      taskTitle: "Jazz Pharmaceuticals, Inc.",
      taskDescription: "Praesent blandit. Nam nulla. Integer pede justo, lacinia eget, tincidunt eget, tempus vel, pede.\n\nMorbi porttitor lorem id ligula. Suspendisse ornare consequat lectus. In est risus, auctor sed, tristique in, tempus sit amet, sem.",
      taskStatus: "User-centric"
    }, {
      taskID: "dynamic",
      taskTitle: "Apotex Corp",
      taskDescription: "Nullam porttitor lacus at turpis. Donec posuere metus vitae ipsum. Aliquam non mauris.",
      taskStatus: "array"
    }, {
      taskID: "coherent",
      taskTitle: "Aphena Pharma Solutions - Tennessee, LLC",
      taskDescription: "Nullam porttitor lacus at turpis. Donec posuere metus vitae ipsum. Aliquam non mauris.",
      taskStatus: "non-volatile"
    }, {
      taskID: "user-facing",
      taskTitle: "Mallinckrodt Inc.",
      taskDescription: "Praesent id massa id nisl venenatis lacinia. Aenean sit amet justo. Morbi ut odio.\n\nCras mi pede, malesuada in, imperdiet et, commodo vulputate, justo. In blandit ultrices enim. Lorem ipsum dolor sit amet, consectetuer adipiscing elit.",
      taskStatus: "Configurable"
    }, {
      taskID: "frame",
      taskTitle: "Allergy Laboratories, Inc.",
      taskDescription: "Nam ultrices, libero non mattis pulvinar, nulla pede ullamcorper augue, a suscipit nulla elit ac nulla. Sed vel enim sit amet nunc viverra dapibus. Nulla suscipit ligula in lacus.\n\nCurabitur at ipsum ac tellus semper interdum. Mauris ullamcorper purus sit amet nulla. Quisque arcu libero, rutrum ac, lobortis vel, dapibus at, diam.",
      taskStatus: "didactic"
    }, {
      taskID: "Assimilated",
      taskTitle: "Physicians Total Care, Inc.",
      taskDescription: "Nulla ut erat id mauris vulputate elementum. Nullam varius. Nulla facilisi.\n\nCras non velit nec nisi vulputate nonummy. Maecenas tincidunt lacus at velit. Vivamus vel nulla eget eros elementum pellentesque.",
      taskStatus: "user-facing"
    }, {
      taskID: "Function-based",
      taskTitle: "Cardinal Health",
      taskDescription: "Nam ultrices, libero non mattis pulvinar, nulla pede ullamcorper augue, a suscipit nulla elit ac nulla. Sed vel enim sit amet nunc viverra dapibus. Nulla suscipit ligula in lacus.\n\nCurabitur at ipsum ac tellus semper interdum. Mauris ullamcorper purus sit amet nulla. Quisque arcu libero, rutrum ac, lobortis vel, dapibus at, diam.",
      taskStatus: "standardization"
    }, {
      taskID: "throughput",
      taskTitle: "Rebel Distributors Corp",
      taskDescription: "Phasellus sit amet erat. Nulla tempus. Vivamus in felis eu sapien cursus vestibulum.\n\nProin eu mi. Nulla ac enim. In tempor, turpis nec euismod scelerisque, quam turpis adipiscing lorem, vitae mattis nibh ligula nec sem.\n\nDuis aliquam convallis nunc. Proin at turpis a pede posuere nonummy. Integer non velit.",
      taskStatus: "policy"
    }, {
      taskID: "uniform",
      taskTitle: "Major Pharmaceuticals",
      taskDescription: "Fusce consequat. Nulla nisl. Nunc nisl.",
      taskStatus: "Graphical User Interface"
    }, {
      taskID: "neutral",
      taskTitle: "REMEDYREPACK INC.",
      taskDescription: "Quisque id justo sit amet sapien dignissim vestibulum. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Nulla dapibus dolor vel est. Donec odio justo, sollicitudin ut, suscipit a, feugiat et, eros.\n\nVestibulum ac est lacinia nisi venenatis tristique. Fusce congue, diam id ornare imperdiet, sapien urna pretium nisl, ut volutpat sapien arcu sed augue. Aliquam erat volutpat.\n\nIn congue. Etiam justo. Etiam pretium iaculis justo.",
      taskStatus: "workforce"
    }, {
      taskID: "mobile",
      taskTitle: "General Injectables & Vaccines, Inc",
      taskDescription: "Proin leo odio, porttitor id, consequat in, consequat ut, nulla. Sed accumsan felis. Ut at dolor quis odio consequat varius.\n\nInteger ac leo. Pellentesque ultrices mattis odio. Donec vitae nisi.",
      taskStatus: "Polarised"
    }, {
      taskID: "encoding",
      taskTitle: "Publix Super Markets Inc",
      taskDescription: "Proin leo odio, porttitor id, consequat in, consequat ut, nulla. Sed accumsan felis. Ut at dolor quis odio consequat varius.",
      taskStatus: "Inverse"
    }, {
      taskID: "asymmetric",
      taskTitle: "Graceway Pharmaceuticals, LLC",
      taskDescription: "Nullam sit amet turpis elementum ligula vehicula consequat. Morbi a ipsum. Integer a nibh.",
      taskStatus: "Re-engineered"
    }, {
      taskID: "Graphical User Interface",
      taskTitle: "Kroger Company",
      taskDescription: "Cras mi pede, malesuada in, imperdiet et, commodo vulputate, justo. In blandit ultrices enim. Lorem ipsum dolor sit amet, consectetuer adipiscing elit.\n\nProin interdum mauris non ligula pellentesque ultrices. Phasellus id sapien in sapien iaculis congue. Vivamus metus arcu, adipiscing molestie, hendrerit at, vulputate vitae, nisl.\n\nAenean lectus. Pellentesque eget nunc. Donec quis orci eget orci vehicula condimentum.",
      taskStatus: "Reverse-engineered"
    }, {
      taskID: "asynchronous",
      taskTitle: "Supervalu Inc",
      taskDescription: "Duis consequat dui nec nisi volutpat eleifend. Donec ut dolor. Morbi vel lectus in quam fringilla rhoncus.\n\nMauris enim leo, rhoncus sed, vestibulum sit amet, cursus id, turpis. Integer aliquet, massa id lobortis convallis, tortor risus dapibus augue, vel accumsan tellus nisi eu orci. Mauris lacinia sapien quis libero.",
      taskStatus: "real-time"
    }, {
      taskID: "support",
      taskTitle: "Global Pharmaceuticals, Division of Impax Laboratories Inc.",
      taskDescription: "Sed sagittis. Nam congue, risus semper porta volutpat, quam pede lobortis ligula, sit amet eleifend pede libero quis orci. Nullam molestie nibh in lectus.\n\nPellentesque at nulla. Suspendisse potenti. Cras in purus eu magna vulputate luctus.\n\nCum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Vivamus vestibulum sagittis sapien. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus.",
      taskStatus: "help-desk"
    }, {
      taskID: "methodology",
      taskTitle: "Torrent Pharmaceuticals Limited",
      taskDescription: "Duis aliquam convallis nunc. Proin at turpis a pede posuere nonummy. Integer non velit.",
      taskStatus: "focus group"
    }, {
      taskID: "Quality-focused",
      taskTitle: "H and P Industries, Inc. dba Triad Group",
      taskDescription: "Cras mi pede, malesuada in, imperdiet et, commodo vulputate, justo. In blandit ultrices enim. Lorem ipsum dolor sit amet, consectetuer adipiscing elit.\n\nProin interdum mauris non ligula pellentesque ultrices. Phasellus id sapien in sapien iaculis congue. Vivamus metus arcu, adipiscing molestie, hendrerit at, vulputate vitae, nisl.\n\nAenean lectus. Pellentesque eget nunc. Donec quis orci eget orci vehicula condimentum.",
      taskStatus: "secondary"
    }, {
      taskID: "Versatile",
      taskTitle: "Mylan Pharmaceuticals Inc.",
      taskDescription: "In hac habitasse platea dictumst. Morbi vestibulum, velit id pretium iaculis, diam erat fermentum justo, nec condimentum neque sapien placerat ante. Nulla justo.",
      taskStatus: "next generation"
    }, {
      taskID: "Object-based",
      taskTitle: "A-S Medication Solutions LLC",
      taskDescription: "Quisque id justo sit amet sapien dignissim vestibulum. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Nulla dapibus dolor vel est. Donec odio justo, sollicitudin ut, suscipit a, feugiat et, eros.\n\nVestibulum ac est lacinia nisi venenatis tristique. Fusce congue, diam id ornare imperdiet, sapien urna pretium nisl, ut volutpat sapien arcu sed augue. Aliquam erat volutpat.",
      taskStatus: "empowering"
    }, {
      taskID: "support",
      taskTitle: "State of Florida DOH Central Pharmacy",
      taskDescription: "Sed sagittis. Nam congue, risus semper porta volutpat, quam pede lobortis ligula, sit amet eleifend pede libero quis orci. Nullam molestie nibh in lectus.\n\nPellentesque at nulla. Suspendisse potenti. Cras in purus eu magna vulputate luctus.",
      taskStatus: "Profound"
    }, {
      taskID: "radical",
      taskTitle: "HOMEOLAB USA INC.",
      taskDescription: "Maecenas ut massa quis augue luctus tincidunt. Nulla mollis molestie lorem. Quisque ut erat.\n\nCurabitur gravida nisi at nibh. In hac habitasse platea dictumst. Aliquam augue quam, sollicitudin vitae, consectetuer eget, rutrum at, lorem.",
      taskStatus: "Versatile"
    }, {
      taskID: "concept",
      taskTitle: "Harris Pharmaceutical, Inc.",
      taskDescription: "Fusce posuere felis sed lacus. Morbi sem mauris, laoreet ut, rhoncus aliquet, pulvinar sed, nisl. Nunc rhoncus dui vel sem.",
      taskStatus: "application"
    }, {
      taskID: "tangible",
      taskTitle: "Walgreen Company",
      taskDescription: "Proin interdum mauris non ligula pellentesque ultrices. Phasellus id sapien in sapien iaculis congue. Vivamus metus arcu, adipiscing molestie, hendrerit at, vulputate vitae, nisl.",
      taskStatus: "national"
    }, {
      taskID: "neural-net",
      taskTitle: "McKesson",
      taskDescription: "Nam ultrices, libero non mattis pulvinar, nulla pede ullamcorper augue, a suscipit nulla elit ac nulla. Sed vel enim sit amet nunc viverra dapibus. Nulla suscipit ligula in lacus.\n\nCurabitur at ipsum ac tellus semper interdum. Mauris ullamcorper purus sit amet nulla. Quisque arcu libero, rutrum ac, lobortis vel, dapibus at, diam.",
      taskStatus: "Business-focused"
    }, {
      taskID: "Universal",
      taskTitle: "Westport Pharmaceuticals",
      taskDescription: "Phasellus in felis. Donec semper sapien a libero. Nam dui.\n\nProin leo odio, porttitor id, consequat in, consequat ut, nulla. Sed accumsan felis. Ut at dolor quis odio consequat varius.\n\nInteger ac leo. Pellentesque ultrices mattis odio. Donec vitae nisi.",
      taskStatus: "24 hour"
    }, {
      taskID: "systematic",
      taskTitle: "West-Ward Pharmaceutical Corp",
      taskDescription: "Praesent blandit. Nam nulla. Integer pede justo, lacinia eget, tincidunt eget, tempus vel, pede.",
      taskStatus: "Multi-layered"
    }, {
      taskID: "hardware",
      taskTitle: "BioActive Nutritional",
      taskDescription: "Integer tincidunt ante vel ipsum. Praesent blandit lacinia erat. Vestibulum sed magna at nunc commodo placerat.\n\nPraesent blandit. Nam nulla. Integer pede justo, lacinia eget, tincidunt eget, tempus vel, pede.\n\nMorbi porttitor lorem id ligula. Suspendisse ornare consequat lectus. In est risus, auctor sed, tristique in, tempus sit amet, sem.",
      taskStatus: "Ergonomic"
    }, {
      taskID: "encryption",
      taskTitle: "HANLIM PHARM. CO., LTD.",
      taskDescription: "In quis justo. Maecenas rhoncus aliquam lacus. Morbi quis tortor id nulla ultrices aliquet.\n\nMaecenas leo odio, condimentum id, luctus nec, molestie sed, justo. Pellentesque viverra pede ac diam. Cras pellentesque volutpat dui.\n\nMaecenas tristique, est et tempus semper, est quam pharetra magna, ac consequat metus sapien ut nunc. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Mauris viverra diam vitae quam. Suspendisse potenti.",
      taskStatus: "methodical"
    }, {
      taskID: "national",
      taskTitle: "Elizabeth Arden, Inc",
      taskDescription: "Integer tincidunt ante vel ipsum. Praesent blandit lacinia erat. Vestibulum sed magna at nunc commodo placerat.\n\nPraesent blandit. Nam nulla. Integer pede justo, lacinia eget, tincidunt eget, tempus vel, pede.\n\nMorbi porttitor lorem id ligula. Suspendisse ornare consequat lectus. In est risus, auctor sed, tristique in, tempus sit amet, sem.",
      taskStatus: "Profound"
    }, {
      taskID: "website",
      taskTitle: "Physicians Total Care, Inc.",
      taskDescription: "Praesent blandit. Nam nulla. Integer pede justo, lacinia eget, tincidunt eget, tempus vel, pede.\n\nMorbi porttitor lorem id ligula. Suspendisse ornare consequat lectus. In est risus, auctor sed, tristique in, tempus sit amet, sem.",
      taskStatus: "core"
    }, {
      taskID: "fault-tolerant",
      taskTitle: "The Mentholatum Company",
      taskDescription: "Duis bibendum, felis sed interdum venenatis, turpis enim blandit mi, in porttitor pede justo eu massa. Donec dapibus. Duis at velit eu est congue elementum.\n\nIn hac habitasse platea dictumst. Morbi vestibulum, velit id pretium iaculis, diam erat fermentum justo, nec condimentum neque sapien placerat ante. Nulla justo.\n\nAliquam quis turpis eget elit sodales scelerisque. Mauris sit amet eros. Suspendisse accumsan tortor quis turpis.",
      taskStatus: "fault-tolerant"
    }, {
      taskID: "contextually-based",
      taskTitle: "Aurobindo Pharma Limited",
      taskDescription: "In congue. Etiam justo. Etiam pretium iaculis justo.",
      taskStatus: "real-time"
    }, {
      taskID: "logistical",
      taskTitle: "Newton Laboratories, Inc.",
      taskDescription: "Maecenas tristique, est et tempus semper, est quam pharetra magna, ac consequat metus sapien ut nunc. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Mauris viverra diam vitae quam. Suspendisse potenti.\n\nNullam porttitor lacus at turpis. Donec posuere metus vitae ipsum. Aliquam non mauris.",
      taskStatus: "Up-sized"
    }, {
      taskID: "coherent",
      taskTitle: "L'Oreal USA Products Inc",
      taskDescription: "Morbi porttitor lorem id ligula. Suspendisse ornare consequat lectus. In est risus, auctor sed, tristique in, tempus sit amet, sem.\n\nFusce consequat. Nulla nisl. Nunc nisl.\n\nDuis bibendum, felis sed interdum venenatis, turpis enim blandit mi, in porttitor pede justo eu massa. Donec dapibus. Duis at velit eu est congue elementum.",
      taskStatus: "installation"
    }, {
      taskID: "database",
      taskTitle: "Delon Laboratories (1990) Ltd",
      taskDescription: "Proin leo odio, porttitor id, consequat in, consequat ut, nulla. Sed accumsan felis. Ut at dolor quis odio consequat varius.",
      taskStatus: "intermediate"
    }, {
      taskID: "portal",
      taskTitle: "Physicians Total Care, Inc.",
      taskDescription: "Cras mi pede, malesuada in, imperdiet et, commodo vulputate, justo. In blandit ultrices enim. Lorem ipsum dolor sit amet, consectetuer adipiscing elit.\n\nProin interdum mauris non ligula pellentesque ultrices. Phasellus id sapien in sapien iaculis congue. Vivamus metus arcu, adipiscing molestie, hendrerit at, vulputate vitae, nisl.",
      taskStatus: "disintermediate"
    }, {
      taskID: "Vision-oriented",
      taskTitle: "Fera Pharmaceuticals, LLC",
      taskDescription: "Etiam vel augue. Vestibulum rutrum rutrum neque. Aenean auctor gravida sem.",
      taskStatus: "extranet"
    }, {
      taskID: "implementation",
      taskTitle: "CVS Pharmacy",
      taskDescription: "In hac habitasse platea dictumst. Etiam faucibus cursus urna. Ut tellus.\n\nNulla ut erat id mauris vulputate elementum. Nullam varius. Nulla facilisi.\n\nCras non velit nec nisi vulputate nonummy. Maecenas tincidunt lacus at velit. Vivamus vel nulla eget eros elementum pellentesque.",
      taskStatus: "process improvement"
    }, {
      taskID: "Advanced",
      taskTitle: "Physicians Total Care, Inc.",
      taskDescription: "Praesent id massa id nisl venenatis lacinia. Aenean sit amet justo. Morbi ut odio.\n\nCras mi pede, malesuada in, imperdiet et, commodo vulputate, justo. In blandit ultrices enim. Lorem ipsum dolor sit amet, consectetuer adipiscing elit.\n\nProin interdum mauris non ligula pellentesque ultrices. Phasellus id sapien in sapien iaculis congue. Vivamus metus arcu, adipiscing molestie, hendrerit at, vulputate vitae, nisl.",
      taskStatus: "collaboration"
    }, {
      taskID: "workforce",
      taskTitle: "ProBLEN",
      taskDescription: "Phasellus sit amet erat. Nulla tempus. Vivamus in felis eu sapien cursus vestibulum.\n\nProin eu mi. Nulla ac enim. In tempor, turpis nec euismod scelerisque, quam turpis adipiscing lorem, vitae mattis nibh ligula nec sem.\n\nDuis aliquam convallis nunc. Proin at turpis a pede posuere nonummy. Integer non velit.",
      taskStatus: "demand-driven"
    }, {
      taskID: "budgetary management",
      taskTitle: "Reckitt Benckiser LLC",
      taskDescription: "Fusce consequat. Nulla nisl. Nunc nisl.",
      taskStatus: "systematic"
    }, {
      taskID: "actuating",
      taskTitle: "Preferred Pharmaceuticals, Inc.",
      taskDescription: "Cras non velit nec nisi vulputate nonummy. Maecenas tincidunt lacus at velit. Vivamus vel nulla eget eros elementum pellentesque.\n\nQuisque porta volutpat erat. Quisque erat eros, viverra eget, congue eget, semper rutrum, nulla. Nunc purus.\n\nPhasellus in felis. Donec semper sapien a libero. Nam dui.",
      taskStatus: "Distributed"
    }, {
      taskID: "discrete",
      taskTitle: "Safeway",
      taskDescription: "Etiam vel augue. Vestibulum rutrum rutrum neque. Aenean auctor gravida sem.",
      taskStatus: "adapter"
    }, {
      taskID: "help-desk",
      taskTitle: "Tween Brands Inc",
      taskDescription: "Curabitur gravida nisi at nibh. In hac habitasse platea dictumst. Aliquam augue quam, sollicitudin vitae, consectetuer eget, rutrum at, lorem.",
      taskStatus: "parallelism"
    }, {
      taskID: "directional",
      taskTitle: "Dukal Corporation",
      taskDescription: "Proin leo odio, porttitor id, consequat in, consequat ut, nulla. Sed accumsan felis. Ut at dolor quis odio consequat varius.",
      taskStatus: "productivity"
    }, {
      taskID: "optimal",
      taskTitle: "Torrent Pharmaceuticals Limited",
      taskDescription: "Proin leo odio, porttitor id, consequat in, consequat ut, nulla. Sed accumsan felis. Ut at dolor quis odio consequat varius.\n\nInteger ac leo. Pellentesque ultrices mattis odio. Donec vitae nisi.\n\nNam ultrices, libero non mattis pulvinar, nulla pede ullamcorper augue, a suscipit nulla elit ac nulla. Sed vel enim sit amet nunc viverra dapibus. Nulla suscipit ligula in lacus.",
      taskStatus: "multimedia"
    }, {
      taskID: "Multi-tiered",
      taskTitle: "H E B",
      taskDescription: "Duis aliquam convallis nunc. Proin at turpis a pede posuere nonummy. Integer non velit.\n\nDonec diam neque, vestibulum eget, vulputate ut, ultrices vel, augue. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Donec pharetra, magna vestibulum aliquet ultrices, erat tortor sollicitudin mi, sit amet lobortis sapien sapien non mi. Integer ac neque.",
      taskStatus: "circuit"
    }, {
      taskID: "Virtual",
      taskTitle: "CVS Pharmacy Inc",
      taskDescription: "In quis justo. Maecenas rhoncus aliquam lacus. Morbi quis tortor id nulla ultrices aliquet.\n\nMaecenas leo odio, condimentum id, luctus nec, molestie sed, justo. Pellentesque viverra pede ac diam. Cras pellentesque volutpat dui.",
      taskStatus: "extranet"
    }, {
      taskID: "algorithm",
      taskTitle: "Sandoz Inc",
      taskDescription: "Quisque porta volutpat erat. Quisque erat eros, viverra eget, congue eget, semper rutrum, nulla. Nunc purus.",
      taskStatus: "3rd generation"
    }, {
      taskID: "application",
      taskTitle: "ALK-Abello, Inc.",
      taskDescription: "In hac habitasse platea dictumst. Morbi vestibulum, velit id pretium iaculis, diam erat fermentum justo, nec condimentum neque sapien placerat ante. Nulla justo.",
      taskStatus: "flexibility"
    }, {
      taskID: "Configurable",
      taskTitle: "CVS Pharmacy",
      taskDescription: "Quisque porta volutpat erat. Quisque erat eros, viverra eget, congue eget, semper rutrum, nulla. Nunc purus.\n\nPhasellus in felis. Donec semper sapien a libero. Nam dui.",
      taskStatus: "eco-centric"
    }, {
      taskID: "empowering",
      taskTitle: "Antigen Laboratories, Inc.",
      taskDescription: "Curabitur gravida nisi at nibh. In hac habitasse platea dictumst. Aliquam augue quam, sollicitudin vitae, consectetuer eget, rutrum at, lorem.\n\nInteger tincidunt ante vel ipsum. Praesent blandit lacinia erat. Vestibulum sed magna at nunc commodo placerat.\n\nPraesent blandit. Nam nulla. Integer pede justo, lacinia eget, tincidunt eget, tempus vel, pede.",
      taskStatus: "Up-sized"
    }, {
      taskID: "Robust",
      taskTitle: "GlaxoSmithKline Consumer Healthcare LP",
      taskDescription: "Vestibulum quam sapien, varius ut, blandit non, interdum in, ante. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Duis faucibus accumsan odio. Curabitur convallis.",
      taskStatus: "3rd generation"
    }, {
      taskID: "Visionary",
      taskTitle: "Harmon Stores Inc.",
      taskDescription: "Maecenas tristique, est et tempus semper, est quam pharetra magna, ac consequat metus sapien ut nunc. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Mauris viverra diam vitae quam. Suspendisse potenti.\n\nNullam porttitor lacus at turpis. Donec posuere metus vitae ipsum. Aliquam non mauris.",
      taskStatus: "methodical"
    }, {
      taskID: "throughput",
      taskTitle: "Genentech, Inc.",
      taskDescription: "Duis bibendum. Morbi non quam nec dui luctus rutrum. Nulla tellus.\n\nIn sagittis dui vel nisl. Duis ac nibh. Fusce lacus purus, aliquet at, feugiat non, pretium quis, lectus.",
      taskStatus: "parallelism"
    }, {
      taskID: "middleware",
      taskTitle: "Singhfam Corporation",
      taskDescription: "In hac habitasse platea dictumst. Morbi vestibulum, velit id pretium iaculis, diam erat fermentum justo, nec condimentum neque sapien placerat ante. Nulla justo.\n\nAliquam quis turpis eget elit sodales scelerisque. Mauris sit amet eros. Suspendisse accumsan tortor quis turpis.\n\nSed ante. Vivamus tortor. Duis mattis egestas metus.",
      taskStatus: "Quality-focused"
    }, {
      taskID: "systemic",
      taskTitle: "Uriel Pharmacy Inc.",
      taskDescription: "Fusce posuere felis sed lacus. Morbi sem mauris, laoreet ut, rhoncus aliquet, pulvinar sed, nisl. Nunc rhoncus dui vel sem.\n\nSed sagittis. Nam congue, risus semper porta volutpat, quam pede lobortis ligula, sit amet eleifend pede libero quis orci. Nullam molestie nibh in lectus.",
      taskStatus: "success"
    }, {
      taskID: "contingency",
      taskTitle: "SHISEIDO AMERICA INC.",
      taskDescription: "Cras mi pede, malesuada in, imperdiet et, commodo vulputate, justo. In blandit ultrices enim. Lorem ipsum dolor sit amet, consectetuer adipiscing elit.\n\nProin interdum mauris non ligula pellentesque ultrices. Phasellus id sapien in sapien iaculis congue. Vivamus metus arcu, adipiscing molestie, hendrerit at, vulputate vitae, nisl.\n\nAenean lectus. Pellentesque eget nunc. Donec quis orci eget orci vehicula condimentum.",
      taskStatus: "mission-critical"
    }, {
      taskID: "help-desk",
      taskTitle: "Taro Pharmaceuticals U.S.A., Inc.",
      taskDescription: "In congue. Etiam justo. Etiam pretium iaculis justo.\n\nIn hac habitasse platea dictumst. Etiam faucibus cursus urna. Ut tellus.",
      taskStatus: "demand-driven"
    }
  ]

  singleTaskForm: FormGroup = new FormGroup({
    taskID: new FormControl(),
    taskTitle: new FormControl(),
    taskDescription: new FormControl(),
    completionDate: new FormControl()
  })

  constructor(public dialog: MatDialog, private router: Router, private activatedRoute: ActivatedRoute) { }

  openDialog(): void {
    const dialogRef = this.dialog.open(TaskComponent, {
      width: '50%',
      data: {route: this.activatedRoute}
    });
    dialogRef.afterClosed().subscribe(result => {
      console.log('The dialog was closed');
      this.router.navigate([''])
      // this.animal = result;
    });
  }

  getCurrentlyActiveTask(taskID: string){
    return this.data.find(task => {
      {return task.taskID === taskID}
    });
  }
}

