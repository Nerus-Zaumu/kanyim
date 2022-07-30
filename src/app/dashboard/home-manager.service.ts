import { TaskComponent } from './task/task.component';
import { FormGroup, FormControl, Validators } from '@angular/forms';
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
      taskID: "6L1KvMU",
      taskTitle: "Fera Pharmaceuticals",
      taskDescription: "Sed ante. Vivamus tortor. Duis mattis egestas metus.\n\nAenean fermentum. Donec ut mauris eget massa tempor convallis. Nulla neque libero, convallis eget, eleifend luctus, ultricies eu, nibh.",
      taskStatus: "zero tolerance"
    }, {
      taskID: "94AIUaQ",
      taskTitle: "Geiss, Destin + Dunmn, Inc",
      taskDescription: "Maecenas ut massa quis augue luctus tincidunt. Nulla mollis molestie lorem. Quisque ut erat.",
      taskStatus: "synergy"
    }, {
      taskID: "VBMelU3",
      taskTitle: "ALK-Abello, Inc.",
      taskDescription: "Aliquam quis turpis eget elit sodales scelerisque. Mauris sit amet eros. Suspendisse accumsan tortor quis turpis.",
      taskStatus: "needs-based"
    }, {
      taskID: "r4EOb2i",
      taskTitle: "Nelco Laboratories, Inc.",
      taskDescription: "Proin eu mi. Nulla ac enim. In tempor, turpis nec euismod scelerisque, quam turpis adipiscing lorem, vitae mattis nibh ligula nec sem.\n\nDuis aliquam convallis nunc. Proin at turpis a pede posuere nonummy. Integer non velit.\n\nDonec diam neque, vestibulum eget, vulputate ut, ultrices vel, augue. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Donec pharetra, magna vestibulum aliquet ultrices, erat tortor sollicitudin mi, sit amet lobortis sapien sapien non mi. Integer ac neque.",
      taskStatus: "middleware"
    }, {
      taskID: "ir1FWaP",
      taskTitle: "Teva Pharmaceuticals USA Inc",
      taskDescription: "Sed sagittis. Nam congue, risus semper porta volutpat, quam pede lobortis ligula, sit amet eleifend pede libero quis orci. Nullam molestie nibh in lectus.\n\nPellentesque at nulla. Suspendisse potenti. Cras in purus eu magna vulputate luctus.",
      taskStatus: "Ergonomic"
    }, {
      taskID: "uPBkEfX",
      taskTitle: "Nelco Laboratories, Inc.",
      taskDescription: "Duis consequat dui nec nisi volutpat eleifend. Donec ut dolor. Morbi vel lectus in quam fringilla rhoncus.\n\nMauris enim leo, rhoncus sed, vestibulum sit amet, cursus id, turpis. Integer aliquet, massa id lobortis convallis, tortor risus dapibus augue, vel accumsan tellus nisi eu orci. Mauris lacinia sapien quis libero.",
      taskStatus: "tangible"
    }, {
      taskID: "9pK8pfs",
      taskTitle: "ALK-Abello, Inc.",
      taskDescription: "In hac habitasse platea dictumst. Morbi vestibulum, velit id pretium iaculis, diam erat fermentum justo, nec condimentum neque sapien placerat ante. Nulla justo.\n\nAliquam quis turpis eget elit sodales scelerisque. Mauris sit amet eros. Suspendisse accumsan tortor quis turpis.\n\nSed ante. Vivamus tortor. Duis mattis egestas metus.",
      taskStatus: "knowledge user"
    }, {
      taskID: "bDdcZOh",
      taskTitle: "Rebel Distributors Corp",
      taskDescription: "In sagittis dui vel nisl. Duis ac nibh. Fusce lacus purus, aliquet at, feugiat non, pretium quis, lectus.\n\nSuspendisse potenti. In eleifend quam a odio. In hac habitasse platea dictumst.",
      taskStatus: "matrix"
    }, {
      taskID: "ONmYmSI",
      taskTitle: "Eagle Distributors,Inc.",
      taskDescription: "Nulla ut erat id mauris vulputate elementum. Nullam varius. Nulla facilisi.",
      taskStatus: "3rd generation"
    }, {
      taskID: "Ran3mKe",
      taskTitle: "Amerisource Bergen",
      taskDescription: "Proin leo odio, porttitor id, consequat in, consequat ut, nulla. Sed accumsan felis. Ut at dolor quis odio consequat varius.\n\nInteger ac leo. Pellentesque ultrices mattis odio. Donec vitae nisi.",
      taskStatus: "Future-proofed"
    }, {
      taskID: "5VFZAjH",
      taskTitle: "Moore Medical LLC",
      taskDescription: "Curabitur in libero ut massa volutpat convallis. Morbi odio odio, elementum eu, interdum eu, tincidunt in, leo. Maecenas pulvinar lobortis est.",
      taskStatus: "software"
    }, {
      taskID: "KCu1Pxd",
      taskTitle: "Liddell Laboratories, Inc.",
      taskDescription: "Nullam sit amet turpis elementum ligula vehicula consequat. Morbi a ipsum. Integer a nibh.\n\nIn quis justo. Maecenas rhoncus aliquam lacus. Morbi quis tortor id nulla ultrices aliquet.",
      taskStatus: "methodology"
    }, {
      taskID: "ofR6aaW",
      taskTitle: "Mylan Institutional Inc.",
      taskDescription: "Vestibulum quam sapien, varius ut, blandit non, interdum in, ante. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Duis faucibus accumsan odio. Curabitur convallis.\n\nDuis consequat dui nec nisi volutpat eleifend. Donec ut dolor. Morbi vel lectus in quam fringilla rhoncus.\n\nMauris enim leo, rhoncus sed, vestibulum sit amet, cursus id, turpis. Integer aliquet, massa id lobortis convallis, tortor risus dapibus augue, vel accumsan tellus nisi eu orci. Mauris lacinia sapien quis libero.",
      taskStatus: "Implemented"
    }, {
      taskID: "pvKHnPc",
      taskTitle: "Reckitt Benckiser LLC",
      taskDescription: "Nulla ut erat id mauris vulputate elementum. Nullam varius. Nulla facilisi.",
      taskStatus: "non-volatile"
    }, {
      taskID: "PNWJ2iK",
      taskTitle: "Caraco Pharmaceutical Laboratories, Ltd.",
      taskDescription: "Phasellus sit amet erat. Nulla tempus. Vivamus in felis eu sapien cursus vestibulum.\n\nProin eu mi. Nulla ac enim. In tempor, turpis nec euismod scelerisque, quam turpis adipiscing lorem, vitae mattis nibh ligula nec sem.\n\nDuis aliquam convallis nunc. Proin at turpis a pede posuere nonummy. Integer non velit.",
      taskStatus: "structure"
    }, {
      taskID: "ZizXw5u",
      taskTitle: "Jubilant HollisterStier LLC",
      taskDescription: "In hac habitasse platea dictumst. Morbi vestibulum, velit id pretium iaculis, diam erat fermentum justo, nec condimentum neque sapien placerat ante. Nulla justo.\n\nAliquam quis turpis eget elit sodales scelerisque. Mauris sit amet eros. Suspendisse accumsan tortor quis turpis.",
      taskStatus: "orchestration"
    }, {
      taskID: "1JVZx7N",
      taskTitle: "UNIFIRST FIRST AID CORPORATION",
      taskDescription: "Praesent blandit. Nam nulla. Integer pede justo, lacinia eget, tincidunt eget, tempus vel, pede.",
      taskStatus: "forecast"
    }, {
      taskID: "odNpS5b",
      taskTitle: "Apotheca Company",
      taskDescription: "Sed sagittis. Nam congue, risus semper porta volutpat, quam pede lobortis ligula, sit amet eleifend pede libero quis orci. Nullam molestie nibh in lectus.\n\nPellentesque at nulla. Suspendisse potenti. Cras in purus eu magna vulputate luctus.\n\nCum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Vivamus vestibulum sagittis sapien. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus.",
      taskStatus: "zero tolerance"
    }, {
      taskID: "d3N9f6E",
      taskTitle: "CHANEL PARFUMS BEAUTE",
      taskDescription: "Donec diam neque, vestibulum eget, vulputate ut, ultrices vel, augue. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Donec pharetra, magna vestibulum aliquet ultrices, erat tortor sollicitudin mi, sit amet lobortis sapien sapien non mi. Integer ac neque.",
      taskStatus: "executive"
    }, {
      taskID: "9mdVwFP",
      taskTitle: "Sandoz Inc",
      taskDescription: "Aenean lectus. Pellentesque eget nunc. Donec quis orci eget orci vehicula condimentum.\n\nCurabitur in libero ut massa volutpat convallis. Morbi odio odio, elementum eu, interdum eu, tincidunt in, leo. Maecenas pulvinar lobortis est.\n\nPhasellus sit amet erat. Nulla tempus. Vivamus in felis eu sapien cursus vestibulum.",
      taskStatus: "function"
    }, {
      taskID: "0oj5pJq",
      taskTitle: "H and P Industries, Inc. dba Triad Group",
      taskDescription: "Vestibulum ac est lacinia nisi venenatis tristique. Fusce congue, diam id ornare imperdiet, sapien urna pretium nisl, ut volutpat sapien arcu sed augue. Aliquam erat volutpat.\n\nIn congue. Etiam justo. Etiam pretium iaculis justo.\n\nIn hac habitasse platea dictumst. Etiam faucibus cursus urna. Ut tellus.",
      taskStatus: "even-keeled"
    }, {
      taskID: "Us2BqnK",
      taskTitle: "Antigen Laboratories, Inc.",
      taskDescription: "Vestibulum quam sapien, varius ut, blandit non, interdum in, ante. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Duis faucibus accumsan odio. Curabitur convallis.",
      taskStatus: "Persistent"
    }, {
      taskID: "zoDYlSF",
      taskTitle: "Nelco Laboratories, Inc.",
      taskDescription: "Nullam porttitor lacus at turpis. Donec posuere metus vitae ipsum. Aliquam non mauris.\n\nMorbi non lectus. Aliquam sit amet diam in magna bibendum imperdiet. Nullam orci pede, venenatis non, sodales sed, tincidunt eu, felis.",
      taskStatus: "national"
    }, {
      taskID: "hLbKeRD",
      taskTitle: "The Body Shop Wake Forest",
      taskDescription: "Curabitur gravida nisi at nibh. In hac habitasse platea dictumst. Aliquam augue quam, sollicitudin vitae, consectetuer eget, rutrum at, lorem.\n\nInteger tincidunt ante vel ipsum. Praesent blandit lacinia erat. Vestibulum sed magna at nunc commodo placerat.",
      taskStatus: "Monitored"
    }, {
      taskID: "zVaozmW",
      taskTitle: "Onpoint, Inc.",
      taskDescription: "Phasellus sit amet erat. Nulla tempus. Vivamus in felis eu sapien cursus vestibulum.\n\nProin eu mi. Nulla ac enim. In tempor, turpis nec euismod scelerisque, quam turpis adipiscing lorem, vitae mattis nibh ligula nec sem.\n\nDuis aliquam convallis nunc. Proin at turpis a pede posuere nonummy. Integer non velit.",
      taskStatus: "concept"
    }, {
      taskID: "r5L0lEi",
      taskTitle: "McKesson Contract Packaging",
      taskDescription: "Nullam porttitor lacus at turpis. Donec posuere metus vitae ipsum. Aliquam non mauris.\n\nMorbi non lectus. Aliquam sit amet diam in magna bibendum imperdiet. Nullam orci pede, venenatis non, sodales sed, tincidunt eu, felis.",
      taskStatus: "Sharable"
    }, {
      taskID: "QYK24Cl",
      taskTitle: "Project, Inc.",
      taskDescription: "Integer tincidunt ante vel ipsum. Praesent blandit lacinia erat. Vestibulum sed magna at nunc commodo placerat.",
      taskStatus: "Public-key"
    }, {
      taskID: "xvwmgXE",
      taskTitle: "Physicians Total Care, Inc.",
      taskDescription: "Aenean fermentum. Donec ut mauris eget massa tempor convallis. Nulla neque libero, convallis eget, eleifend luctus, ultricies eu, nibh.",
      taskStatus: "Distributed"
    }, {
      taskID: "Bx6l6xZ",
      taskTitle: "Antigen Laboratories, Inc.",
      taskDescription: "Phasellus sit amet erat. Nulla tempus. Vivamus in felis eu sapien cursus vestibulum.",
      taskStatus: "6th generation"
    }, {
      taskID: "ru7exSG",
      taskTitle: "Amerisource Bergen",
      taskDescription: "In congue. Etiam justo. Etiam pretium iaculis justo.",
      taskStatus: "User-friendly"
    }, {
      taskID: "c8GWXXE",
      taskTitle: "Roxane Laboratories, Inc",
      taskDescription: "Nullam porttitor lacus at turpis. Donec posuere metus vitae ipsum. Aliquam non mauris.\n\nMorbi non lectus. Aliquam sit amet diam in magna bibendum imperdiet. Nullam orci pede, venenatis non, sodales sed, tincidunt eu, felis.",
      taskStatus: "regional"
    }, {
      taskID: "eqJD0LP",
      taskTitle: "Uriel Pharmacy Inc.",
      taskDescription: "Curabitur gravida nisi at nibh. In hac habitasse platea dictumst. Aliquam augue quam, sollicitudin vitae, consectetuer eget, rutrum at, lorem.\n\nInteger tincidunt ante vel ipsum. Praesent blandit lacinia erat. Vestibulum sed magna at nunc commodo placerat.\n\nPraesent blandit. Nam nulla. Integer pede justo, lacinia eget, tincidunt eget, tempus vel, pede.",
      taskStatus: "Multi-layered"
    }, {
      taskID: "4iz0f86",
      taskTitle: "Rebel Distributors Corp",
      taskDescription: "Sed sagittis. Nam congue, risus semper porta volutpat, quam pede lobortis ligula, sit amet eleifend pede libero quis orci. Nullam molestie nibh in lectus.\n\nPellentesque at nulla. Suspendisse potenti. Cras in purus eu magna vulputate luctus.",
      taskStatus: "Phased"
    }, {
      taskID: "CKAmiaD",
      taskTitle: "Glytone",
      taskDescription: "Duis bibendum, felis sed interdum venenatis, turpis enim blandit mi, in porttitor pede justo eu massa. Donec dapibus. Duis at velit eu est congue elementum.\n\nIn hac habitasse platea dictumst. Morbi vestibulum, velit id pretium iaculis, diam erat fermentum justo, nec condimentum neque sapien placerat ante. Nulla justo.\n\nAliquam quis turpis eget elit sodales scelerisque. Mauris sit amet eros. Suspendisse accumsan tortor quis turpis.",
      taskStatus: "Automated"
    }, {
      taskID: "kFcbScA",
      taskTitle: "Homeocare Laboratories",
      taskDescription: "In quis justo. Maecenas rhoncus aliquam lacus. Morbi quis tortor id nulla ultrices aliquet.\n\nMaecenas leo odio, condimentum id, luctus nec, molestie sed, justo. Pellentesque viverra pede ac diam. Cras pellentesque volutpat dui.",
      taskStatus: "empowering"
    }, {
      taskID: "qXX27w3",
      taskTitle: "Kmart Corporation",
      taskDescription: "Aliquam quis turpis eget elit sodales scelerisque. Mauris sit amet eros. Suspendisse accumsan tortor quis turpis.\n\nSed ante. Vivamus tortor. Duis mattis egestas metus.\n\nAenean fermentum. Donec ut mauris eget massa tempor convallis. Nulla neque libero, convallis eget, eleifend luctus, ultricies eu, nibh.",
      taskStatus: "explicit"
    }, {
      taskID: "eIFK6g3",
      taskTitle: "State of Florida DOH Central Pharmacy",
      taskDescription: "Praesent id massa id nisl venenatis lacinia. Aenean sit amet justo. Morbi ut odio.\n\nCras mi pede, malesuada in, imperdiet et, commodo vulputate, justo. In blandit ultrices enim. Lorem ipsum dolor sit amet, consectetuer adipiscing elit.",
      taskStatus: "website"
    }, {
      taskID: "Ue4pa2I",
      taskTitle: "PharmaDerm a division of Fougera Pharmaceuticals Inc.",
      taskDescription: "Integer tincidunt ante vel ipsum. Praesent blandit lacinia erat. Vestibulum sed magna at nunc commodo placerat.\n\nPraesent blandit. Nam nulla. Integer pede justo, lacinia eget, tincidunt eget, tempus vel, pede.",
      taskStatus: "4th generation"
    }, {
      taskID: "hcTQPwR",
      taskTitle: "CVS Pharmacy",
      taskDescription: "Nullam sit amet turpis elementum ligula vehicula consequat. Morbi a ipsum. Integer a nibh.\n\nIn quis justo. Maecenas rhoncus aliquam lacus. Morbi quis tortor id nulla ultrices aliquet.\n\nMaecenas leo odio, condimentum id, luctus nec, molestie sed, justo. Pellentesque viverra pede ac diam. Cras pellentesque volutpat dui.",
      taskStatus: "client-server"
    }, {
      taskID: "ztxxLXz",
      taskTitle: "Pacific Word Corporation",
      taskDescription: "Aliquam quis turpis eget elit sodales scelerisque. Mauris sit amet eros. Suspendisse accumsan tortor quis turpis.\n\nSed ante. Vivamus tortor. Duis mattis egestas metus.",
      taskStatus: "Integrated"
    }, {
      taskID: "soeQvPl",
      taskTitle: "Jazz Pharmaceuticals, Inc.",
      taskDescription: "Praesent blandit. Nam nulla. Integer pede justo, lacinia eget, tincidunt eget, tempus vel, pede.\n\nMorbi porttitor lorem id ligula. Suspendisse ornare consequat lectus. In est risus, auctor sed, tristique in, tempus sit amet, sem.",
      taskStatus: "User-centric"
    }, {
      taskID: "ftsIpkO",
      taskTitle: "Apotex Corp",
      taskDescription: "Nullam porttitor lacus at turpis. Donec posuere metus vitae ipsum. Aliquam non mauris.",
      taskStatus: "array"
    }, {
      taskID: "CFsny1H",
      taskTitle: "Aphena Pharma Solutions - Tennessee, LLC",
      taskDescription: "Nullam porttitor lacus at turpis. Donec posuere metus vitae ipsum. Aliquam non mauris.",
      taskStatus: "non-volatile"
    }, {
      taskID: "iwbLaCD",
      taskTitle: "Mallinckrodt Inc.",
      taskDescription: "Praesent id massa id nisl venenatis lacinia. Aenean sit amet justo. Morbi ut odio.\n\nCras mi pede, malesuada in, imperdiet et, commodo vulputate, justo. In blandit ultrices enim. Lorem ipsum dolor sit amet, consectetuer adipiscing elit.",
      taskStatus: "Configurable"
    }, {
      taskID: "Q7RxzDw",
      taskTitle: "Allergy Laboratories, Inc.",
      taskDescription: "Nam ultrices, libero non mattis pulvinar, nulla pede ullamcorper augue, a suscipit nulla elit ac nulla. Sed vel enim sit amet nunc viverra dapibus. Nulla suscipit ligula in lacus.\n\nCurabitur at ipsum ac tellus semper interdum. Mauris ullamcorper purus sit amet nulla. Quisque arcu libero, rutrum ac, lobortis vel, dapibus at, diam.",
      taskStatus: "didactic"
    }, {
      taskID: "aELEuWY",
      taskTitle: "Physicians Total Care, Inc.",
      taskDescription: "Nulla ut erat id mauris vulputate elementum. Nullam varius. Nulla facilisi.\n\nCras non velit nec nisi vulputate nonummy. Maecenas tincidunt lacus at velit. Vivamus vel nulla eget eros elementum pellentesque.",
      taskStatus: "user-facing"
    }, {
      taskID: "zZcs3c5",
      taskTitle: "Cardinal Health",
      taskDescription: "Nam ultrices, libero non mattis pulvinar, nulla pede ullamcorper augue, a suscipit nulla elit ac nulla. Sed vel enim sit amet nunc viverra dapibus. Nulla suscipit ligula in lacus.\n\nCurabitur at ipsum ac tellus semper interdum. Mauris ullamcorper purus sit amet nulla. Quisque arcu libero, rutrum ac, lobortis vel, dapibus at, diam.",
      taskStatus: "standardization"
    }, {
      taskID: "45PILi8",
      taskTitle: "Rebel Distributors Corp",
      taskDescription: "Phasellus sit amet erat. Nulla tempus. Vivamus in felis eu sapien cursus vestibulum.\n\nProin eu mi. Nulla ac enim. In tempor, turpis nec euismod scelerisque, quam turpis adipiscing lorem, vitae mattis nibh ligula nec sem.\n\nDuis aliquam convallis nunc. Proin at turpis a pede posuere nonummy. Integer non velit.",
      taskStatus: "policy"
    }, {
      taskID: "3nRzml9",
      taskTitle: "Major Pharmaceuticals",
      taskDescription: "Fusce consequat. Nulla nisl. Nunc nisl.",
      taskStatus: "Graphical User Interface"
    }, {
      taskID: "bIwpuNZ",
      taskTitle: "REMEDYREPACK INC.",
      taskDescription: "Quisque id justo sit amet sapien dignissim vestibulum. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Nulla dapibus dolor vel est. Donec odio justo, sollicitudin ut, suscipit a, feugiat et, eros.\n\nVestibulum ac est lacinia nisi venenatis tristique. Fusce congue, diam id ornare imperdiet, sapien urna pretium nisl, ut volutpat sapien arcu sed augue. Aliquam erat volutpat.\n\nIn congue. Etiam justo. Etiam pretium iaculis justo.",
      taskStatus: "workforce"
    }, {
      taskID: "gq4ZDOV",
      taskTitle: "General Injectables & Vaccines, Inc",
      taskDescription: "Proin leo odio, porttitor id, consequat in, consequat ut, nulla. Sed accumsan felis. Ut at dolor quis odio consequat varius.\n\nInteger ac leo. Pellentesque ultrices mattis odio. Donec vitae nisi.",
      taskStatus: "Polarised"
    }, {
      taskID: "vaQYm25",
      taskTitle: "Publix Super Markets Inc",
      taskDescription: "Proin leo odio, porttitor id, consequat in, consequat ut, nulla. Sed accumsan felis. Ut at dolor quis odio consequat varius.",
      taskStatus: "Inverse"
    }, {
      taskID: "UQ0QhLR",
      taskTitle: "Graceway Pharmaceuticals, LLC",
      taskDescription: "Nullam sit amet turpis elementum ligula vehicula consequat. Morbi a ipsum. Integer a nibh.",
      taskStatus: "Re-engineered"
    }, {
      taskID: "ZVK2FD1",
      taskTitle: "Kroger Company",
      taskDescription: "Cras mi pede, malesuada in, imperdiet et, commodo vulputate, justo. In blandit ultrices enim. Lorem ipsum dolor sit amet, consectetuer adipiscing elit.\n\nProin interdum mauris non ligula pellentesque ultrices. Phasellus id sapien in sapien iaculis congue. Vivamus metus arcu, adipiscing molestie, hendrerit at, vulputate vitae, nisl.\n\nAenean lectus. Pellentesque eget nunc. Donec quis orci eget orci vehicula condimentum.",
      taskStatus: "Reverse-engineered"
    }, {
      taskID: "2Ffx4a7",
      taskTitle: "Supervalu Inc",
      taskDescription: "Duis consequat dui nec nisi volutpat eleifend. Donec ut dolor. Morbi vel lectus in quam fringilla rhoncus.\n\nMauris enim leo, rhoncus sed, vestibulum sit amet, cursus id, turpis. Integer aliquet, massa id lobortis convallis, tortor risus dapibus augue, vel accumsan tellus nisi eu orci. Mauris lacinia sapien quis libero.",
      taskStatus: "real-time"
    }, {
      taskID: "54OlpuW",
      taskTitle: "Global Pharmaceuticals, Division of Impax Laboratories Inc.",
      taskDescription: "Sed sagittis. Nam congue, risus semper porta volutpat, quam pede lobortis ligula, sit amet eleifend pede libero quis orci. Nullam molestie nibh in lectus.\n\nPellentesque at nulla. Suspendisse potenti. Cras in purus eu magna vulputate luctus.\n\nCum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Vivamus vestibulum sagittis sapien. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus.",
      taskStatus: "help-desk"
    }, {
      taskID: "vMMOyvx",
      taskTitle: "Torrent Pharmaceuticals Limited",
      taskDescription: "Duis aliquam convallis nunc. Proin at turpis a pede posuere nonummy. Integer non velit.",
      taskStatus: "focus group"
    }, {
      taskID: "5D6I7Qa",
      taskTitle: "H and P Industries, Inc. dba Triad Group",
      taskDescription: "Cras mi pede, malesuada in, imperdiet et, commodo vulputate, justo. In blandit ultrices enim. Lorem ipsum dolor sit amet, consectetuer adipiscing elit.\n\nProin interdum mauris non ligula pellentesque ultrices. Phasellus id sapien in sapien iaculis congue. Vivamus metus arcu, adipiscing molestie, hendrerit at, vulputate vitae, nisl.\n\nAenean lectus. Pellentesque eget nunc. Donec quis orci eget orci vehicula condimentum.",
      taskStatus: "secondary"
    }, {
      taskID: "ezAo9QX",
      taskTitle: "Mylan Pharmaceuticals Inc.",
      taskDescription: "In hac habitasse platea dictumst. Morbi vestibulum, velit id pretium iaculis, diam erat fermentum justo, nec condimentum neque sapien placerat ante. Nulla justo.",
      taskStatus: "next generation"
    }, {
      taskID: "RCyKcfa",
      taskTitle: "A-S Medication Solutions LLC",
      taskDescription: "Quisque id justo sit amet sapien dignissim vestibulum. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Nulla dapibus dolor vel est. Donec odio justo, sollicitudin ut, suscipit a, feugiat et, eros.\n\nVestibulum ac est lacinia nisi venenatis tristique. Fusce congue, diam id ornare imperdiet, sapien urna pretium nisl, ut volutpat sapien arcu sed augue. Aliquam erat volutpat.",
      taskStatus: "empowering"
    }, {
      taskID: "73KwPap",
      taskTitle: "State of Florida DOH Central Pharmacy",
      taskDescription: "Sed sagittis. Nam congue, risus semper porta volutpat, quam pede lobortis ligula, sit amet eleifend pede libero quis orci. Nullam molestie nibh in lectus.\n\nPellentesque at nulla. Suspendisse potenti. Cras in purus eu magna vulputate luctus.",
      taskStatus: "Profound"
    }, {
      taskID: "Yx2os6K",
      taskTitle: "HOMEOLAB USA INC.",
      taskDescription: "Maecenas ut massa quis augue luctus tincidunt. Nulla mollis molestie lorem. Quisque ut erat.\n\nCurabitur gravida nisi at nibh. In hac habitasse platea dictumst. Aliquam augue quam, sollicitudin vitae, consectetuer eget, rutrum at, lorem.",
      taskStatus: "Versatile"
    }, {
      taskID: "AgvvHyg",
      taskTitle: "Harris Pharmaceutical, Inc.",
      taskDescription: "Fusce posuere felis sed lacus. Morbi sem mauris, laoreet ut, rhoncus aliquet, pulvinar sed, nisl. Nunc rhoncus dui vel sem.",
      taskStatus: "application"
    }, {
      taskID: "L5kclbj",
      taskTitle: "Walgreen Company",
      taskDescription: "Proin interdum mauris non ligula pellentesque ultrices. Phasellus id sapien in sapien iaculis congue. Vivamus metus arcu, adipiscing molestie, hendrerit at, vulputate vitae, nisl.",
      taskStatus: "national"
    }, {
      taskID: "oczjgay",
      taskTitle: "McKesson",
      taskDescription: "Nam ultrices, libero non mattis pulvinar, nulla pede ullamcorper augue, a suscipit nulla elit ac nulla. Sed vel enim sit amet nunc viverra dapibus. Nulla suscipit ligula in lacus.\n\nCurabitur at ipsum ac tellus semper interdum. Mauris ullamcorper purus sit amet nulla. Quisque arcu libero, rutrum ac, lobortis vel, dapibus at, diam.",
      taskStatus: "Business-focused"
    }, {
      taskID: "D2kYnAS",
      taskTitle: "Westport Pharmaceuticals",
      taskDescription: "Phasellus in felis. Donec semper sapien a libero. Nam dui.\n\nProin leo odio, porttitor id, consequat in, consequat ut, nulla. Sed accumsan felis. Ut at dolor quis odio consequat varius.\n\nInteger ac leo. Pellentesque ultrices mattis odio. Donec vitae nisi.",
      taskStatus: "24 hour"
    }, {
      taskID: "vrO6uub",
      taskTitle: "West-Ward Pharmaceutical Corp",
      taskDescription: "Praesent blandit. Nam nulla. Integer pede justo, lacinia eget, tincidunt eget, tempus vel, pede.",
      taskStatus: "Multi-layered"
    }, {
      taskID: "CWtG1wk",
      taskTitle: "BioActive Nutritional",
      taskDescription: "Integer tincidunt ante vel ipsum. Praesent blandit lacinia erat. Vestibulum sed magna at nunc commodo placerat.\n\nPraesent blandit. Nam nulla. Integer pede justo, lacinia eget, tincidunt eget, tempus vel, pede.\n\nMorbi porttitor lorem id ligula. Suspendisse ornare consequat lectus. In est risus, auctor sed, tristique in, tempus sit amet, sem.",
      taskStatus: "Ergonomic"
    }, {
      taskID: "IdSXr1M",
      taskTitle: "HANLIM PHARM. CO., LTD.",
      taskDescription: "In quis justo. Maecenas rhoncus aliquam lacus. Morbi quis tortor id nulla ultrices aliquet.\n\nMaecenas leo odio, condimentum id, luctus nec, molestie sed, justo. Pellentesque viverra pede ac diam. Cras pellentesque volutpat dui.\n\nMaecenas tristique, est et tempus semper, est quam pharetra magna, ac consequat metus sapien ut nunc. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Mauris viverra diam vitae quam. Suspendisse potenti.",
      taskStatus: "methodical"
    }, {
      taskID: "deq4Sui",
      taskTitle: "Elizabeth Arden, Inc",
      taskDescription: "Integer tincidunt ante vel ipsum. Praesent blandit lacinia erat. Vestibulum sed magna at nunc commodo placerat.\n\nPraesent blandit. Nam nulla. Integer pede justo, lacinia eget, tincidunt eget, tempus vel, pede.\n\nMorbi porttitor lorem id ligula. Suspendisse ornare consequat lectus. In est risus, auctor sed, tristique in, tempus sit amet, sem.",
      taskStatus: "Profound"
    }, {
      taskID: "2AG9eHS",
      taskTitle: "Physicians Total Care, Inc.",
      taskDescription: "Praesent blandit. Nam nulla. Integer pede justo, lacinia eget, tincidunt eget, tempus vel, pede.\n\nMorbi porttitor lorem id ligula. Suspendisse ornare consequat lectus. In est risus, auctor sed, tristique in, tempus sit amet, sem.",
      taskStatus: "core"
    }, {
      taskID: "fKoC0Wkx",
      taskTitle: "The Mentholatum Company",
      taskDescription: "Duis bibendum, felis sed interdum venenatis, turpis enim blandit mi, in porttitor pede justo eu massa. Donec dapibus. Duis at velit eu est congue elementum.\n\nIn hac habitasse platea dictumst. Morbi vestibulum, velit id pretium iaculis, diam erat fermentum justo, nec condimentum neque sapien placerat ante. Nulla justo.\n\nAliquam quis turpis eget elit sodales scelerisque. Mauris sit amet eros. Suspendisse accumsan tortor quis turpis.",
      taskStatus: "fault-tolerant"
    }, {
      taskID: "eQ2417b",
      taskTitle: "Aurobindo Pharma Limited",
      taskDescription: "In congue. Etiam justo. Etiam pretium iaculis justo.",
      taskStatus: "real-time"
    }, {
      taskID: "cz9QCjA",
      taskTitle: "Newton Laboratories, Inc.",
      taskDescription: "Maecenas tristique, est et tempus semper, est quam pharetra magna, ac consequat metus sapien ut nunc. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Mauris viverra diam vitae quam. Suspendisse potenti.\n\nNullam porttitor lacus at turpis. Donec posuere metus vitae ipsum. Aliquam non mauris.",
      taskStatus: "Up-sized"
    }, {
      taskID: "j5ENviW",
      taskTitle: "L'Oreal USA Products Inc",
      taskDescription: "Morbi porttitor lorem id ligula. Suspendisse ornare consequat lectus. In est risus, auctor sed, tristique in, tempus sit amet, sem.\n\nFusce consequat. Nulla nisl. Nunc nisl.\n\nDuis bibendum, felis sed interdum venenatis, turpis enim blandit mi, in porttitor pede justo eu massa. Donec dapibus. Duis at velit eu est congue elementum.",
      taskStatus: "installation"
    }, {
      taskID: "ZwQCn7Z",
      taskTitle: "Delon Laboratories (1990) Ltd",
      taskDescription: "Proin leo odio, porttitor id, consequat in, consequat ut, nulla. Sed accumsan felis. Ut at dolor quis odio consequat varius.",
      taskStatus: "intermediate"
    }, {
      taskID: "viJowfA",
      taskTitle: "Physicians Total Care, Inc.",
      taskDescription: "Cras mi pede, malesuada in, imperdiet et, commodo vulputate, justo. In blandit ultrices enim. Lorem ipsum dolor sit amet, consectetuer adipiscing elit.\n\nProin interdum mauris non ligula pellentesque ultrices. Phasellus id sapien in sapien iaculis congue. Vivamus metus arcu, adipiscing molestie, hendrerit at, vulputate vitae, nisl.",
      taskStatus: "disintermediate"
    }, {
      taskID: "Y3IIgeN",
      taskTitle: "Fera Pharmaceuticals, LLC",
      taskDescription: "Etiam vel augue. Vestibulum rutrum rutrum neque. Aenean auctor gravida sem.",
      taskStatus: "extranet"
    }, {
      taskID: "LBLn4iI",
      taskTitle: "CVS Pharmacy",
      taskDescription: "In hac habitasse platea dictumst. Etiam faucibus cursus urna. Ut tellus.\n\nNulla ut erat id mauris vulputate elementum. Nullam varius. Nulla facilisi.\n\nCras non velit nec nisi vulputate nonummy. Maecenas tincidunt lacus at velit. Vivamus vel nulla eget eros elementum pellentesque.",
      taskStatus: "process improvement"
    }, {
      taskID: "ieST7ZG",
      taskTitle: "Physicians Total Care, Inc.",
      taskDescription: "Praesent id massa id nisl venenatis lacinia. Aenean sit amet justo. Morbi ut odio.\n\nCras mi pede, malesuada in, imperdiet et, commodo vulputate, justo. In blandit ultrices enim. Lorem ipsum dolor sit amet, consectetuer adipiscing elit.\n\nProin interdum mauris non ligula pellentesque ultrices. Phasellus id sapien in sapien iaculis congue. Vivamus metus arcu, adipiscing molestie, hendrerit at, vulputate vitae, nisl.",
      taskStatus: "collaboration"
    }, {
      taskID: "ODFWsqX",
      taskTitle: "ProBLEN",
      taskDescription: "Phasellus sit amet erat. Nulla tempus. Vivamus in felis eu sapien cursus vestibulum.\n\nProin eu mi. Nulla ac enim. In tempor, turpis nec euismod scelerisque, quam turpis adipiscing lorem, vitae mattis nibh ligula nec sem.\n\nDuis aliquam convallis nunc. Proin at turpis a pede posuere nonummy. Integer non velit.",
      taskStatus: "demand-driven"
    }, {
      taskID: "7elHmLM",
      taskTitle: "Reckitt Benckiser LLC",
      taskDescription: "Fusce consequat. Nulla nisl. Nunc nisl.",
      taskStatus: "systematic"
    }, {
      taskID: "GFjEGHh",
      taskTitle: "Preferred Pharmaceuticals, Inc.",
      taskDescription: "Cras non velit nec nisi vulputate nonummy. Maecenas tincidunt lacus at velit. Vivamus vel nulla eget eros elementum pellentesque.\n\nQuisque porta volutpat erat. Quisque erat eros, viverra eget, congue eget, semper rutrum, nulla. Nunc purus.\n\nPhasellus in felis. Donec semper sapien a libero. Nam dui.",
      taskStatus: "Distributed"
    }, {
      taskID: "ULzl19V",
      taskTitle: "Safeway",
      taskDescription: "Etiam vel augue. Vestibulum rutrum rutrum neque. Aenean auctor gravida sem.",
      taskStatus: "adapter"
    }, {
      taskID: "4TmZ8j2",
      taskTitle: "Tween Brands Inc",
      taskDescription: "Curabitur gravida nisi at nibh. In hac habitasse platea dictumst. Aliquam augue quam, sollicitudin vitae, consectetuer eget, rutrum at, lorem.",
      taskStatus: "parallelism"
    }, {
      taskID: "OjH2R8I",
      taskTitle: "Dukal Corporation",
      taskDescription: "Proin leo odio, porttitor id, consequat in, consequat ut, nulla. Sed accumsan felis. Ut at dolor quis odio consequat varius.",
      taskStatus: "productivity"
    }, {
      taskID: "cnIy8k0",
      taskTitle: "Torrent Pharmaceuticals Limited",
      taskDescription: "Proin leo odio, porttitor id, consequat in, consequat ut, nulla. Sed accumsan felis. Ut at dolor quis odio consequat varius.\n\nInteger ac leo. Pellentesque ultrices mattis odio. Donec vitae nisi.\n\nNam ultrices, libero non mattis pulvinar, nulla pede ullamcorper augue, a suscipit nulla elit ac nulla. Sed vel enim sit amet nunc viverra dapibus. Nulla suscipit ligula in lacus.",
      taskStatus: "multimedia"
    }, {
      taskID: "2BdWELM",
      taskTitle: "H E B",
      taskDescription: "Duis aliquam convallis nunc. Proin at turpis a pede posuere nonummy. Integer non velit.\n\nDonec diam neque, vestibulum eget, vulputate ut, ultrices vel, augue. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Donec pharetra, magna vestibulum aliquet ultrices, erat tortor sollicitudin mi, sit amet lobortis sapien sapien non mi. Integer ac neque.",
      taskStatus: "circuit"
    }, {
      taskID: "5WqIjlx",
      taskTitle: "CVS Pharmacy Inc",
      taskDescription: "In quis justo. Maecenas rhoncus aliquam lacus. Morbi quis tortor id nulla ultrices aliquet.\n\nMaecenas leo odio, condimentum id, luctus nec, molestie sed, justo. Pellentesque viverra pede ac diam. Cras pellentesque volutpat dui.",
      taskStatus: "extranet"
    }, {
      taskID: "O9iT4hR",
      taskTitle: "Sandoz Inc",
      taskDescription: "Quisque porta volutpat erat. Quisque erat eros, viverra eget, congue eget, semper rutrum, nulla. Nunc purus.",
      taskStatus: "3rd generation"
    }, {
      taskID: "qCcQagm",
      taskTitle: "ALK-Abello, Inc.",
      taskDescription: "In hac habitasse platea dictumst. Morbi vestibulum, velit id pretium iaculis, diam erat fermentum justo, nec condimentum neque sapien placerat ante. Nulla justo.",
      taskStatus: "flexibility"
    }, {
      taskID: "V2oIR53",
      taskTitle: "CVS Pharmacy",
      taskDescription: "Quisque porta volutpat erat. Quisque erat eros, viverra eget, congue eget, semper rutrum, nulla. Nunc purus.\n\nPhasellus in felis. Donec semper sapien a libero. Nam dui.",
      taskStatus: "eco-centric"
    }, {
      taskID: "cFgnL7g",
      taskTitle: "Antigen Laboratories, Inc.",
      taskDescription: "Curabitur gravida nisi at nibh. In hac habitasse platea dictumst. Aliquam augue quam, sollicitudin vitae, consectetuer eget, rutrum at, lorem.\n\nInteger tincidunt ante vel ipsum. Praesent blandit lacinia erat. Vestibulum sed magna at nunc commodo placerat.\n\nPraesent blandit. Nam nulla. Integer pede justo, lacinia eget, tincidunt eget, tempus vel, pede.",
      taskStatus: "Up-sized"
    }, {
      taskID: "iohlIpw",
      taskTitle: "GlaxoSmithKline Consumer Healthcare LP",
      taskDescription: "Vestibulum quam sapien, varius ut, blandit non, interdum in, ante. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Duis faucibus accumsan odio. Curabitur convallis.",
      taskStatus: "3rd generation"
    }, {
      taskID: "1FIx5dE",
      taskTitle: "Harmon Stores Inc.",
      taskDescription: "Maecenas tristique, est et tempus semper, est quam pharetra magna, ac consequat metus sapien ut nunc. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Mauris viverra diam vitae quam. Suspendisse potenti.\n\nNullam porttitor lacus at turpis. Donec posuere metus vitae ipsum. Aliquam non mauris.",
      taskStatus: "methodical"
    }, {
      taskID: "TVuR2ze",
      taskTitle: "Genentech, Inc.",
      taskDescription: "Duis bibendum. Morbi non quam nec dui luctus rutrum. Nulla tellus.\n\nIn sagittis dui vel nisl. Duis ac nibh. Fusce lacus purus, aliquet at, feugiat non, pretium quis, lectus.",
      taskStatus: "parallelism"
    }, {
      taskID: "awyKVcQ",
      taskTitle: "Singhfam Corporation",
      taskDescription: "In hac habitasse platea dictumst. Morbi vestibulum, velit id pretium iaculis, diam erat fermentum justo, nec condimentum neque sapien placerat ante. Nulla justo.\n\nAliquam quis turpis eget elit sodales scelerisque. Mauris sit amet eros. Suspendisse accumsan tortor quis turpis.\n\nSed ante. Vivamus tortor. Duis mattis egestas metus.",
      taskStatus: "Quality-focused"
    }, {
      taskID: "fGExKFg",
      taskTitle: "Uriel Pharmacy Inc.",
      taskDescription: "Fusce posuere felis sed lacus. Morbi sem mauris, laoreet ut, rhoncus aliquet, pulvinar sed, nisl. Nunc rhoncus dui vel sem.\n\nSed sagittis. Nam congue, risus semper porta volutpat, quam pede lobortis ligula, sit amet eleifend pede libero quis orci. Nullam molestie nibh in lectus.",
      taskStatus: "success"
    }, {
      taskID: "FakMQZL",
      taskTitle: "SHISEIDO AMERICA INC.",
      taskDescription: "Cras mi pede, malesuada in, imperdiet et, commodo vulputate, justo. In blandit ultrices enim. Lorem ipsum dolor sit amet, consectetuer adipiscing elit.\n\nProin interdum mauris non ligula pellentesque ultrices. Phasellus id sapien in sapien iaculis congue. Vivamus metus arcu, adipiscing molestie, hendrerit at, vulputate vitae, nisl.\n\nAenean lectus. Pellentesque eget nunc. Donec quis orci eget orci vehicula condimentum.",
      taskStatus: "mission-critical"
    }, {
      taskID: "mhsRQrJ",
      taskTitle: "Taro Pharmaceuticals U.S.A., Inc.",
      taskDescription: "In congue. Etiam justo. Etiam pretium iaculis justo.\n\nIn hac habitasse platea dictumst. Etiam faucibus cursus urna. Ut tellus.",
      taskStatus: "demand-driven"
    }
  ]

  newTasks: Task[] = this.data

  tasksInProgress: Task[] = []

  completedTasks: Task[] = []

  singleTaskForm: FormGroup = new FormGroup({
    taskID: new FormControl(),
    taskTitle: new FormControl(),
    taskDescription: new FormControl(),
    completionDate: new FormControl()
  })

  boardForm: FormGroup = new FormGroup({
    startTaskName: new FormControl(),
    taskInProgress: new FormControl(),
    completedTask: new FormControl()
  })

  newTaskForm: FormGroup = new FormGroup({
    title: new FormControl('', Validators.required),
    description: new FormControl('', Validators.required),
    completionDate: new FormControl('', Validators.required)
  })

  constructor(public dialog: MatDialog, private router: Router, private activatedRoute: ActivatedRoute) {

  }

  openDialog(taskID: string): void {
    this.router.navigate(['users/dashboard/home', taskID])
    const dialogRef = this.dialog.open(TaskComponent, {
      width: '50%',
      data: {route: this.activatedRoute}
    });
    dialogRef.afterClosed().subscribe(result => {
      console.log('The dialog was closed');
      this.router.navigate([''])
    });
  }

  getCurrentlyActiveTask(taskID: string){
    return this.data.find(task => {
      {return task.taskID === taskID}
    });
  }
}


