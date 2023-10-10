import * as React from 'react';
import FormGroup from '@mui/material/FormGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
import Checkbox from '@mui/material/Checkbox';

export default function BotCheckbox() {
    return (
        <FormGroup>
            <FormControlLabel control={<Checkbox />} label="チャンネル名決め" />
            <FormControlLabel control={<Checkbox />} label="プロダクト案" />
            <FormControlLabel control={<Checkbox />} label="フロントエンド" />
            <FormControlLabel control={<Checkbox />} label="バックエンド" />
            <FormControlLabel control={<Checkbox />} label=" GitHubBot" />
            <FormControlLabel control={<Checkbox />} label="進捗報告" />

        </FormGroup>
    );
}