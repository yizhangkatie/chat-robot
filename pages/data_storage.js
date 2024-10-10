import fs from 'fs';
import path from 'path';

class Credentials {
    constructor(username, password, isAdmin = false) {
        this.username = username;
        this.password = password;
        this.isAdmin = isAdmin;
    }

    toObject() {
        return {
            username: this.username,
            password: this.password,
            is_admin: this.isAdmin
        };
    }
}

function createFolderIfNotExist(folder) {
    if (!fs.existsSync(folder)) {
        fs.mkdirSync(folder, { recursive: true });
    }
}

function readCredentials(filePath) {
    try {
        const data = fs.readFileSync(filePath, 'utf8');
        const jsonData = JSON.parse(data);
        return Object.fromEntries(
            Object.entries(jsonData).map(([k, v]) => [k, new Credentials(v.username, v.password, v.is_admin)])
        );
    } catch (error) {
        if (error.code === 'ENOENT' || error instanceof SyntaxError) {
            return {};
        }
        throw error; // Re-throw unexpected errors
    }
}

function writeCredentials(filePath, credentialsDict) {
    const data = Object.fromEntries(
        Object.entries(credentialsDict).map(([k, v]) => [k, v.toObject()])
    );
    fs.writeFileSync(filePath, JSON.stringify(data, null, 4), 'utf8');
}


const storageFolder = 'tmp_data';
const storageFile = path.join(storageFolder, 'user_credentials.json');


createFolderIfNotExist(storageFolder);


let credentials = readCredentials(storageFile);

// 如果初始文件为空，则初始化管理员账户
if (Object.keys(credentials).length === 0) {
    const admin = new Credentials('admin', 'admin123', true);
    credentials['admin'] = admin;
    writeCredentials(storageFile, credentials);
}
