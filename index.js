import { GoogleOAuthProvider } from '@react-oauth/google';
import * as fs from 'fs';
fs.writeFileSync('./text.js', GoogleOAuthProvider.toString());