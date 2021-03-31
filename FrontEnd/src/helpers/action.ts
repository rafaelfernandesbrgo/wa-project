export function actionPt(action: string): string {
  if (action === 'create') {
    return ' incluído';
  }
  if (action === 'update') {
    return 'atualizado';
  }
  if (action === 'remove') {
    return 'excluído';
  }
  return '';
}

export type IAction = 'create' | 'remove' | 'update';
