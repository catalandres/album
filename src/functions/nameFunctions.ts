import * as path from 'node:path';
import { getMetadataExtension } from './getMetadataExtension';

export function concatenateObjectNameAndName(record: Record<string, unknown>): string {
  let result: string = '';
  if (record.objectName) {
    if (record.name) {
      result = (record.objectName as string) + "." + (record.name as string);
    } else {
      result = record.objectName as string;
    }
  } else {
    if (record.name) {
      result = record.name as string;
    } else {
      result = '';
    }
  }
  return result;
}

export function getBasenameWithoutExtension(record: Record<string, unknown>): string {
  const fileName = record.fileName as string || '';
  const extension = getMetadataExtension(fileName);
  return path.basename(record.fileName as string || '').replace(extension, '');
}

export function getFullNameValue(record: Record<string, unknown>): string {
  return (record.fullName as string) || '';
}

export function getNameOfSecondToLastFolderLevel(record: Record<string, unknown>): string {
  return (record.fileName as string)?.split(path.sep)?.reverse()[2] || '';
}

export function getFirstHalfOfBasenameSplitByPeriod(record: Record<string, unknown>): string {
  const basename = getBasenameWithoutExtension(record);
  return basename.split('.')[0] || "";
}

export function getSecondHalfOfBasenameSplitByPeriod(record: Record<string, unknown>): string {
  const basename = getBasenameWithoutExtension(record);
  return basename.split(".")[1] || "";
}

export function getFirstHalfOfBasenameSplitByDash(record: Record<string, unknown>): string {
  const basename = getBasenameWithoutExtension(record);
  return basename.split("-")[0] || "";
}

export function getSecondHalfOfBasenameSplitByDash(record: Record<string, unknown>): string {
  const basename = getBasenameWithoutExtension(record);
  return basename.split("-")[1] || "";
}
