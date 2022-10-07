var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
import jsonwebtoken from 'jsonwebtoken';
import { getLocalStorage } from '../models/localstorage';
// export const authenticateToken = async (req: Request, res: Response, next: NextFunction) => {
//   const authHeaders = req.headers['authorization']
//   const token = authHeaders?.split(' ')[1]
//   if(!token){
//       res.sendStatus(401)
//   }
//   jsonwebtoken.verify(token!, process.env.JWT_ACCESS_TOKEN as string, (err, user) => {
//     if(err)return res.sendStatus(403)
//     req.currentUser = user
//     next()
//   })
// }
export const authenticateToken = (req, res, next) => __awaiter(void 0, void 0, void 0, function* () {
    var _a;
    try {
        const { authToken } = req.cookies;
        console.log(authToken);
        if (!authToken) {
            (_a = getLocalStorage()) === null || _a === void 0 ? void 0 : _a.removeItem('temp');
            return next({ success: false, msg: 'Please Log in to access data!' });
        }
        const verify = jsonwebtoken.verify(authToken, process.env.JWT_ACCESS_TOKEN);
        // const currentUser = await User.findOne({where: {userId: verify.}})
        next();
    }
    catch (error) {
        return next(error);
    }
});
